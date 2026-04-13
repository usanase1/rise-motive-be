import { prisma } from "../lib/prisma";
import { sendTrackingEmail } from "../utils/email";
import { randomBytes } from "crypto";
import { CreateCreativeMediaRequest } from "../types";

export class CreativeMediaService {
  private static generateTrackingCode(): string {
    return `MEDIA-${randomBytes(4).toString("hex").toUpperCase()}`;
  }

  static async create(data: CreateCreativeMediaRequest) {
    const result = await prisma.creativeMediaRequest.create({
      data: {
        ...data,
        documentUrl: data.documentUrl || null, // ADD THIS
        trackingCode: CreativeMediaService.generateTrackingCode(),
      },
    });

    if (result.customerEmail) {
      await sendTrackingEmail(
        result.customerEmail,
        result.customerName,
        result.trackingCode,
        "Creative Media",
      ).catch(console.error);
    }

    return result;
  }

  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.creativeMediaRequest.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.creativeMediaRequest.count(),
    ]);
    return { total, items };
  }

  static async getById(id: number) {
    const item = await prisma.creativeMediaRequest.findUnique({
      where: { id },
    });
    if (!item) throw new Error("Creative media request not found");
    return item;
  }

  static async update(id: number, data: any) {
    await CreativeMediaService.getById(id);
    return prisma.creativeMediaRequest.update({ where: { id }, data });
  }

  static async delete(id: number) {
    await CreativeMediaService.getById(id);
    return prisma.creativeMediaRequest.delete({ where: { id } });
  }

  static async updateStatus(id: number, status: string) {
    await CreativeMediaService.getById(id);
    return prisma.creativeMediaRequest.update({
      where: { id },
      data: { status: status as any },
    });
  }
}
