import { transporter } from "../config/email";
import { emailTemplates } from "../utils/emailTemplates";
import prisma from "../config/prisma";

export class EmailService {

  // Send any email
  private async sendEmail(to: string, subject: string, html: string) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to,
        subject,
        html,
      });
      console.log(`✅ Email sent to ${to}: ${subject}`);
      return true;
    } catch (error: any) {
      console.error(`❌ Email failed to ${to}:`, error.message);
      return false;
    }
  }

  // After customer submits service request
  async sendRequestConfirmation(requestId: number) {
    const request = await prisma.serviceRequest.findUnique({
      where: { id: requestId },
    });
    if (!request) return;

    // Send notification to Admin
    const adminEmail = process.env.ADMIN_EMAIL!;
    const adminTemplate = emailTemplates.newRequestNotification({
      customerName: request.customerName,
      customerPhone: request.customerPhone,
      trackingCode: request.trackingCode,
      service: request.service || 'Not specified',
      serviceCategory: request.serviceCategory,
      description: request.description,
      location: request.location || 'Not specified',
      preferredDate: request.preferredDate ?? undefined,
    });
    await this.sendEmail(adminEmail, adminTemplate.subject, adminTemplate.html);

    // Send confirmation to Customer (if they provided email)
    if (request.customerEmail) {
      const customerTemplate = emailTemplates.serviceRequestConfirmation({
        customerName: request.customerName,
        trackingCode: request.trackingCode,
        service: request.service || 'Not specified',
        description: request.description,
        location: request.location || 'Not specified',
      });
      await this.sendEmail(request.customerEmail, customerTemplate.subject, customerTemplate.html);
    }
  }

  // When status changes — email customer if they have email and status is COMPLETED or CANCELLED
  async sendStatusUpdate(requestId: number) {
    const request = await prisma.serviceRequest.findUnique({
      where: { id: requestId },
      include: { tasker: true },
    });
    if (!request) return;

    // Admin notification
    const adminEmail = process.env.ADMIN_EMAIL!;
    const template = emailTemplates.statusUpdate({
      customerName: request.customerName,
      trackingCode: request.trackingCode,
      status: request.status,
      taskerName: request.tasker?.name,
      taskerPhone: request.tasker?.phone,
    });
    await this.sendEmail(adminEmail, template.subject, template.html);

    // Send to customer ONLY if status is COMPLETED or CANCELLED
    if (request.customerEmail && (request.status === "COMPLETED" || request.status === "CANCELLED")) {
      await this.sendEmail(request.customerEmail, template.subject, template.html);
    }
  }

  // When new order is placed — notify admin
  async sendNewOrderNotification(orderId: number) {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { product: true },
    });
    if (!order) return;

    const adminEmail = process.env.ADMIN_EMAIL!;
    const template = emailTemplates.newOrderNotification({
      customerName: order.customerName,
      customerPhone: order.customerPhone,
      trackingCode: order.trackingCode,
      productName: order.product.name,
      quantity: order.quantity,
      address: order.address,
      note: order.note ?? undefined,
    });

    await this.sendEmail(adminEmail, template.subject, template.html);
  }

  // When new staff is registered
  async sendWelcomeEmail(data: {
    fullName: string;
    email: string;
    password: string;
    role: string;
    otpCode?: string;
  }) {
    const template = emailTemplates.welcomeStaff(data);
    await this.sendEmail(data.email, template.subject, template.html);
  }

  // When password is changed
  async sendPasswordChangeNotification(data: {
    fullName: string;
    email: string;
  }) {
    const template = emailTemplates.passwordChangeNotification(data);
    await this.sendEmail(data.email, template.subject, template.html);
  }
}
