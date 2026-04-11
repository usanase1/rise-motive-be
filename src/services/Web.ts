import { prisma } from "../lib/prisma";
import { randomBytes } from "crypto";
import { CreateWebDigitalRequest, UpdateWebDigitalRequest } from "../types";

export class WebDigitalService {

  // helper
  private static generateTrackingCode(): string {
    return `WEB-${randomBytes(4).toString("hex").toUpperCase()}`; // e.g. WEB-3F9A1C2B
  }

  // CREATE
  static async create(data: CreateWebDigitalRequest) {
    return prisma.webDigitalRequest.create({
      data: {
        ...data,
        trackingCode: WebDigitalService.generateTrackingCode(),
      },
    });
  }

  // GET ALL
  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.webDigitalRequest.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.webDigitalRequest.count(),
    ]);

    return { total, items };
  }

  // GET ONE BY ID
  static async getById(id: number) {
    const item = await prisma.webDigitalRequest.findUnique({ where: { id } });
    if (!item) throw new Error("Web & Digital request not found");
    return item;
  }

  // UPDATE
  static async update(id: number, data: UpdateWebDigitalRequest) {
    await WebDigitalService.getById(id); // 404 guard
    return prisma.webDigitalRequest.update({
      where: { id },
      data,
    });
  }

  // DELETE
  static async delete(id: number) {
    await WebDigitalService.getById(id); // 404 guard
    return prisma.webDigitalRequest.delete({ where: { id } });
  }
}