import prisma from "../config/prisma";
import { CreateOrderDto, UpdateOrderStatusDto } from "../dtos/order.dto";
import { generateTrackingCode } from "../utils/generateTrackingCode";
import { EmailService } from "./email.service";

const emailService = new EmailService();

export class OrderService {

  async createOrder(dto: CreateOrderDto) {
    // Verify product exists
    const product = await prisma.product.findUnique({
      where: { id: dto.productId },
    });
    if (!product) throw new Error(`Product with ID ${dto.productId} not found`);

    const trackingCode = generateTrackingCode("ORD");

    const order = await prisma.order.create({
      data: {
        trackingCode,
        customerName: dto.customerName,
        customerPhone: dto.customerPhone,
        customerEmail: dto.customerEmail,
        address: dto.address,
        quantity: dto.quantity,
        note: dto.note,
        productId: dto.productId,
        status: "PENDING",
      },
      include: { product: true },
    });

    emailService.sendNewOrderNotification(order.id).catch(console.error);

    return order;
  }

  async getAllOrders(status?: string) {
    return prisma.order.findMany({
      where: status ? { status: status as any } : {},
      include: { product: true },
      orderBy: { createdAt: "desc" },
    });
  }

  async getOrderById(id: number) {
    const order = await prisma.order.findUnique({
      where: { id },
      include: { product: true },
    });
    if (!order) throw new Error(`Order with ID ${id} not found`);
    return order;
  }

  async trackOrder(trackingCode: string) {
    const order = await prisma.order.findUnique({
      where: { trackingCode },
      include: { product: true },
    });
    if (!order) throw new Error(`No order found with tracking code: ${trackingCode}`);
    return order;
  }

  async updateOrderStatus(id: number, dto: UpdateOrderStatusDto) {
    return prisma.order.update({
      where: { id },
      data: {
        status: dto.status,
        paymentMethod: dto.paymentMethod,
      },
      include: { product: true },
    });
  }

  async deleteOrder(id: number) {
    await prisma.order.delete({ where: { id } });
    return { message: "Order deleted successfully" };
  }
}