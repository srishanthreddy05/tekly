import nodemailer from "nodemailer";

// Reuse the transporter to avoid recreation on every request
let transporter: nodemailer.Transporter | null = null;

/**
 * Initializes and retrieves the cached Nodemailer SMTP transporter.
 */
export function getMailerTransporter(): nodemailer.Transporter {
  if (!transporter) {
    const host = process.env.BREVO_SMTP_HOST || "smtp-relay.brevo.com";
    const port = parseInt(process.env.BREVO_SMTP_PORT || "587", 10);
    const user = process.env.BREVO_SMTP_USER;
    const pass = process.env.BREVO_SMTP_PASS;

    if (!user || !pass) {
      console.warn(
        "[Mailer Warning]: BREVO_SMTP_USER or BREVO_SMTP_PASS is not defined. SMTP emails may fail."
      );
    }

    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for port 465, false for port 587 or 25
      auth: {
        user,
        pass,
      },
    });
  }

  return transporter;
}

interface WelcomeEmailParams {
  email: string;
  name: string;
}

/**
 * Sends a premium-designed welcome email to a newly signed-up user.
 */
export async function sendWelcomeEmail({ email, name }: WelcomeEmailParams) {
  const mailer = getMailerTransporter();

  const fromName = process.env.MAIL_FROM_NAME || "Tekly";
  const fromEmail = process.env.MAIL_FROM_EMAIL || "hello@tekly.in";

  const hostUrl = process.env.NEXT_PUBLIC_APP_URL || "https://tekly.in";

  // Premium responsive HTML email template
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
        background-color: #f9fafb;
        color: #1f2937;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
      }
      .wrapper {
        width: 100%;
        background-color: #f9fafb;
        padding: 48px 24px;
        box-sizing: border-box;
      }
      .container {
        max-width: 580px;
        margin: 0 auto;
        background-color: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
      }
      .header {
        background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
        padding: 32px 40px;
        text-align: left;
      }
      .logo {
        color: #ffffff;
        font-size: 22px;
        font-weight: 800;
        letter-spacing: -0.03em;
        text-decoration: none;
      }
      .content {
        padding: 40px;
      }
      h1 {
        font-size: 20px;
        font-weight: 700;
        color: #111827;
        margin-top: 0;
        margin-bottom: 24px;
        letter-spacing: -0.02em;
      }
      p {
        font-size: 15px;
        line-height: 1.6;
        color: #4b5563;
        margin-top: 0;
        margin-bottom: 20px;
      }
      .signature-block {
        margin-top: 32px;
        border-top: 1px solid #f3f4f6;
        padding-top: 24px;
      }
      .signature {
        font-size: 15px;
        font-weight: 600;
        color: #111827;
        margin: 0;
      }
      .title {
        font-size: 13px;
        color: #8b5cf6;
        margin: 2px 0 0 0;
        font-weight: 500;
      }
      .footer {
        background-color: #f9fafb;
        padding: 32px 40px;
        border-top: 1px solid #e5e7eb;
        text-align: left;
      }
      .footer-text {
        font-size: 12px;
        color: #9ca3af;
        line-height: 1.5;
        margin: 0 0 8px 0;
      }
      .footer-link {
        color: #6366f1;
        text-decoration: none;
        font-weight: 500;
      }
      .footer-link:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="container">
        <!-- Header -->
        <div class="header">
          <span class="logo">Tekly</span>
        </div>

        <!-- Content -->
        <div class="content">
          <h1>Hello ${name},</h1>
          <p>Thank you for joining the Tekly waitlist. I'm excited to have you here.</p>
          <p>Tekly is being built to help businesses simplify customer engagement through automation, AI-assisted workflows, and a unified customer platform.</p>
          <p>We're currently preparing for launch, and you'll be among the first to know when early access becomes available. Thank you for joining us early.</p>
          
          <div class="signature-block">
            <p class="signature">— Srishanth</p>
            <p class="title">Founder, Tekly</p>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p class="footer-text">Built by Thrivex Labs</p>
          <p class="footer-text">Hyderabad, India</p>
          <p class="footer-text">
            <a href="${hostUrl}" class="footer-link" target="_blank">https://tekly.in</a>
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
  `.trim();

  const mailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to: email,
    subject: "🎉 Welcome to Tekly",
    html: htmlContent,
  };

  try {
    const info = await mailer.sendMail(mailOptions);
    console.log(`[Email Sent]: Welcome email dispatched to ${email}. Message ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("[Email Failed]: SMTP welcome email error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email via SMTP",
    };
  }
}
