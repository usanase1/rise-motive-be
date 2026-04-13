import { prisma } from "../lib/prisma";
import { sendTrackingEmail } from "../utils/email";
import { randomBytes } from "crypto";
import { CreateWebDigitalRequest, UpdateWebDigitalRequest, RequestStatus } from "../types";


export class WebDigitalService {
  // helper
  private static generateTrackingCode(): string {
    return `WEB-${randomBytes(4).toString("hex").toUpperCase()}`; // e.g. WEB-3F9A1C2B
  }

  // CREATE

  static async create(data: CreateWebDigitalRequest) {
    const result = await prisma.webDigitalRequest.create({
      data: {
        ...data,
        trackingCode: WebDigitalService.generateTrackingCode(),
      },
    });

    // Send tracking email
    if (result.customerEmail) {
      await sendTrackingEmail(
        result.customerEmail,
        result.customerName,
        result.trackingCode,
        "Web & Digital",
      ).catch(console.error); // don't fail if email fails
    }

    return result;
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

  // update status

  static async updateStatus(id: number, status: RequestStatus) {
  await WebDigitalService.getById(id);
  return prisma.webDigitalRequest.update({
    where: { id },
    data: { status },
  });
}
}
