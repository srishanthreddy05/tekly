import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validators";
import { checkEmailExists, addWaitlistEntry } from "@/lib/firestore";
import { sendWelcomeEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    // 1. Parse JSON body
    const body = await request.json().catch(() => null);
    if (!body) {
      console.warn("[Waitlist API]: Missing payload or invalid JSON request received.");
      return NextResponse.json(
        { success: false, error: "Missing payload data." },
        { status: 400 }
      );
    }

    // 2. Validate using Zod (server-side validation)
    const parsed = waitlistSchema.safeParse(body);
    if (!parsed.success) {
      const errorMessages = parsed.error.issues.map((e) => e.message).join(" ");
      console.warn(`[Waitlist API Validation Failed]: ${errorMessages}`);
      return NextResponse.json(
        { success: false, error: errorMessages },
        { status: 400 }
      );
    }

    const { name, email } = parsed.data;

    // 3. Firestore Duplicate Check
    const isDuplicate = await checkEmailExists(email);
    if (isDuplicate) {
      console.log(`[Duplicate signup]: Email ${email} attempted to sign up again.`);
      return NextResponse.json(
        { success: false, message: "You're already on the waitlist." },
        { status: 409 }
      );
    }

    // 4. Retrieve client IP Address & User Agent from Headers
    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // 5. Save to Firestore waitlist collection
    try {
      await addWaitlistEntry({
        name,
        email,
        source: "landing_page",
        ipAddress,
        userAgent,
      });
      console.log(`[New waitlist signup]: Registered ${name} (${email}) from IP ${ipAddress}.`);
    } catch (firestoreErr) {
      console.error("[Firestore error]: Failed to store waitlist entry:", firestoreErr);
      return NextResponse.json(
        { success: false, error: "Database registration failed. Please try again." },
        { status: 500 }
      );
    }

    // 6. Send welcome email via Brevo transactional SMTP
    try {
      const emailResult = await sendWelcomeEmail({ email, name });
      if (emailResult.success) {
        console.log(`[Email sent]: Welcome email successfully sent to ${email}.`);
      } else {
        console.warn(`[Email failed]: Welcome email delivery failed: ${emailResult.error}`);
      }
    } catch (emailErr) {
      console.error("[Email failed]: Unhandled exception sending welcome email:", emailErr);
    }

    // 7. Return Success
    return NextResponse.json(
      { success: true, message: "Welcome to Tekly! 🚀" },
      { status: 200 }
    );

  } catch (error) {
    console.error("[API error]: Unexpected server error in /api/waitlist:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
