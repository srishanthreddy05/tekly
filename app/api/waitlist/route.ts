import { NextResponse } from "next/server";
import { collection, addDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { waitlistSchema } from "@/lib/validation";
import { sendWelcomeEmail } from "@/lib/brevo";

export async function POST(request: Request) {
  try {
    // 1. Parse JSON body
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: "Missing payload data." },
        { status: 400 }
      );
    }

    // 2. Validate using Zod
    const parsed = waitlistSchema.safeParse(body);
    if (!parsed.success) {
      const errorMessages = parsed.error.issues.map((e) => e.message).join(" ");
      return NextResponse.json(
        { success: false, error: errorMessages },
        { status: 400 }
      );
    }

    const { name, email } = parsed.data;

    // 3. Firestore Duplicate Check
    const waitlistCollection = collection(db, "waitlist");
    const duplicateQuery = query(waitlistCollection, where("email", "==", email));
    const duplicateSnapshot = await getDocs(duplicateQuery);

    if (!duplicateSnapshot.empty) {
      return NextResponse.json(
        { success: false, error: "You're already on the waitlist." },
        { status: 409 }
      );
    }

    // 4. Save to Firestore waitlist collection
    await addDoc(waitlistCollection, {
      name,
      email,
      source: "landing_page",
      joinedAt: serverTimestamp(),
    });

    // 5. Send welcome email via Brevo transactional SMTP
    const brevoResult = await sendWelcomeEmail({ email, name });
    if (!brevoResult.success && !brevoResult.bypassed) {
      console.warn(
        "[Waitlist API Warning]: Brevo sync failed but firestore record was saved:",
        brevoResult.error
      );
    }

    // 6. Return Success
    return NextResponse.json(
      { success: true, message: "Welcome to Tekly 🚀" },
      { status: 200 }
    );

  } catch (error) {
    console.error("[Waitlist API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Unable to join. Please try again." },
      { status: 500 }
    );
  }
}
