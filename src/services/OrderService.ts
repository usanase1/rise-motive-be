import { prisma } from "../lib/prisma";
import { randomBytes } from "crypto";
import { OrderStatus } from "@prisma/client";

interface CreateOrderRequest {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  address: string;
  quantity?: number;
  paymentMethod?: string;
  note?: string;
  productId: number;
}

interface UpdateOrderRequest {
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  address?: string;
  quantity?: number;
  paymentMethod?: string;
  note?: string;
}

export class OrderService {

  private static generateTrackingCode(): string {
    return `ORD-${randomBytes(4).toString("hex").toUpperCase()}`; // e.g. ORD-3F9A1C2B
  }

  // CREATE
  static async create(data: CreateOrderRequest) {
    return prisma.order.create({
      data: {
        ...data,
        trackingCode: OrderService.generateTrackingCode(),
      },
      include: { product: true },
    });
  }

  // GET ALL
  static async getAll(status?: OrderStatus) {
    const [items, total] = await Promise.all([
      prisma.order.findMany({
        where: status ? { status } : undefined,
        orderBy: { createdAt: "desc" },
        include: { product: true },
      }),
      prisma.order.count({
        where: status ? { status } : undefined,
      }),
    ]);

    return { total, items };
  }

  // GET ONE BY ID
  static async getById(id: number) {
    const order = await prisma.order.findUnique({
      where: { id },
      include: { product: true },
    });
    if (!order) throw new Error("Order not found");
    return order;
  }

  // GET BY TRACKING CODE (public tracking)
  static async getByTrackingCode(trackingCode: string) {
    const order = await prisma.order.findUnique({
      where: { trackingCode },
      include: { product: true },
    });
    if (!order) throw new Error("Order not found");
    return order;
  }

  // UPDATE
  static async update(id: number, data: UpdateOrderRequest) {
    await OrderService.getById(id); // 404 guard
    return prisma.order.update({
      where: { id },
      data,
      include: { product: true },
    });
  }

  // UPDATE STATUS
  static async updateStatus(id: number, status: OrderStatus) {
    await OrderService.getById(id); // 404 guard
    return prisma.order.update({
      where: { id },
      data: { status },
      include: { product: true },
    });
  }

  // DELETE
  static async delete(id: number) {
    await OrderService.getById(id); // 404 guard
    return prisma.order.delete({ where: { id } });
  }
}