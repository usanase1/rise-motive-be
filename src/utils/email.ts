import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendTrackingEmail(
  to: string,
  customerName: string,
  trackingCode: string,
  serviceType: string,
) {
  await transporter.sendMail({
    from: `"RiseMotive" <${process.env.SMTP_USER}>`,
    to,
    subject: `Your Request Has Been Received — ${trackingCode}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1E3A8A; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">RISEMOTIVE</h1>
          <p style="color: #BFDBFE; margin: 4px 0 0;">Building Skills. Delivering Solutions</p>
        </div>
        <div style="padding: 32px 24px; background: #f9fafb;">
          <h2 style="color: #1E3A8A;">Hello, ${customerName}!</h2>
          <p style="color: #374151;">Your <strong>${serviceType}</strong> request has been received successfully.</p>
          <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
            <p style="color: #6B7280; margin: 0 0 8px; font-size: 13px;">YOUR TRACKING CODE</p>
            <p style="color: #1E3A8A; font-size: 28px; font-weight: bold; margin: 0; letter-spacing: 2px;">${trackingCode}</p>
          </div>
          <p style="color: #374151;">Use this code to track the status of your request. Our team will reach out to you soon.</p>
          <p style="color: #6B7280; font-size: 13px; margin-top: 32px;">— The RiseMotive Team</p>
        </div>
      </div>
    `,
  });
}