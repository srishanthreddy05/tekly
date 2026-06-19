"use server";

import { collection, addDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { waitlistSchema, type WaitlistInput } from "@/lib/validation";
import { sendWelcomeEmail } from "@/lib/brevo";

export type WaitlistResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function joinWaitlist(data: WaitlistInput): Promise<WaitlistResponse> {
  // 1. Validate inputs server-side
  const parsed = waitlistSchema.safeParse(data);
  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map((e) => e.message).join(" ");
    return { success: false, error: errorMessages };
  }

  const { email, name } = parsed.data;

  try {
    // 2. Prevent duplicate entries
    const waitlistCollection = collection(db, "waitlist");
    const duplicateQuery = query(waitlistCollection, where("email", "==", email));
    const duplicateSnapshot = await getDocs(duplicateQuery);

    if (!duplicateSnapshot.empty) {
      return {
        success: false,
        error: "This email is already registered. We'll be in touch soon!",
      };
    }

    // 3. Save to Firebase Firestore
    await addDoc(waitlistCollection, {
      name,
      email,
      source: "landing_page",
      joinedAt: serverTimestamp(),
    });

    // 4. Sync with Brevo welcome transactional email
    const brevoResult = await sendWelcomeEmail({ email, name });

    if (!brevoResult.success && !brevoResult.bypassed) {
      console.warn("[Waitlist Warning]: Brevo sync failed but firestore write succeeded:", brevoResult.error);
    }

    return {
      success: true,
      message: "Thank you! You've successfully joined the waitlist for Tekly.",
    };
  } catch (error) {
    console.error("[Waitlist Registration Error]:", error);
    
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
