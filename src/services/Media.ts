import { prisma } from "../lib/prisma";
import { randomBytes } from "crypto";
import { CreateCreativeMediaRequest, UpdateCreativeMediaRequest } from "../types";

export class CreativeMediaService {

  // helper
  private static generateTrackingCode(): string {
    return `MEDIA-${randomBytes(4).toString("hex").toUpperCase()}`; // e.g. MEDIA-3F9A1C2B
  }

  // CREATE
  static async create(data: CreateCreativeMediaRequest) {
    return prisma.creativeMediaRequest.create({
      data: {
        ...data,
        trackingCode: CreativeMediaService.generateTrackingCode(),
      },
    });
  }

  // GET ALL
  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.creativeMediaRequest.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.creativeMediaRequest.count(),
    ]);

    return { total, items };
  }

  // GET ONE BY ID
  static async getById(id: number) {
    const item = await prisma.creativeMediaRequest.findUnique({ where: { id } });
    if (!item) throw new Error("Creative media request not found");
    return item;
  }

  // UPDATE
  static async update(id: number, data: UpdateCreativeMediaRequest) {
    await CreativeMediaService.getById(id); // 404 guard
    return prisma.creativeMediaRequest.update({
      where: { id },
      data,
    });
  }

  // DELETE
  static async delete(id: number) {
    await CreativeMediaService.getById(id); // 404 guard
    return prisma.creativeMediaRequest.delete({ where: { id } });
  }
}