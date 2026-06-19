/**
 * Brevo SMTP API Transactional Email helper
 */
export async function sendWelcomeEmail({
  email,
  name,
}: {
  email: string;
  name: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.warn(
      "[Brevo Warning]: BREVO_API_KEY environment variable is not defined. Skipping welcome email."
    );
    return { success: true, bypassed: true };
  }

  // Beautiful minimalist HTML email template matching Tekly branding
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Tekly</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #fafafa;
            color: #1a1a1a;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
          .container {
            max-width: 580px;
            margin: 40px auto;
            background-color: #ffffff;
            border: 1px solid #e4e4e7;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          }
          .logo {
            font-weight: 700;
            font-size: 18px;
            letter-spacing: -0.02em;
            color: #581c87; /* Violet primary theme color */
            margin-bottom: 30px;
            display: inline-flex;
            align-items: center;
          }
          h1 {
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.02em;
            margin-top: 0;
            margin-bottom: 20px;
            color: #09090b;
          }
          p {
            font-size: 14px;
            line-height: 1.6;
            color: #444446;
            margin-top: 0;
            margin-bottom: 16px;
          }
          .divider {
            height: 1px;
            background-color: #f4f4f5;
            margin: 30px 0;
          }
          .footer {
            font-size: 11px;
            color: #a1a1aa;
            line-height: 1.5;
          }
          .footer a {
            color: #71717a;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">Tekly</div>
          <h1>Welcome to the waitlist, ${name}.</h1>
          <p>Thank you for joining the Tekly waitlist.</p>
          <p>We're currently preparing for launch, and you'll be among the first to know when early access opens.</p>
          <p>Our mission is to simplify customer engagement for businesses through automation, AI-assisted workflows, and a unified customer platform.</p>
          <p>We're excited to have you with us from the beginning.</p>
          <p style="margin-top: 24px;">— Srishanth<br><span style="font-size: 12px; color: #71717a;">Founder, Tekly</span></p>
          
          <div class="divider"></div>
          
          <div class="footer">
            <p>Built by Thrivex Labs<br>
            Hyderabad, India<br>
            <a href="https://tekly.in" target="_blank">https://tekly.in</a></p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Srishanth from Tekly",
          email: "hello@tekly.in", // Verified domain sender email
        },
        to: [
          {
            email,
            name,
          },
        ],
        subject: "Welcome to Tekly 🚀",
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("[Brevo SMTP Error response]:", errorData);
      return { 
        success: false, 
        error: errorData.message || "Failed to dispatch Brevo transactional email" 
      };
    }

    return { success: true };
  } catch (error) {
    console.error("[Brevo SMTP Connection error]:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Network error" 
    };
  }
}
