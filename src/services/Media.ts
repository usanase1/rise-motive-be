import { prisma } from "../lib/prisma";

export class CreativeMediaService {

  static async create(data: any) {
    return prisma.creativeMediaRequest.create({ data });
  }

  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.creativeMediaRequest.findMany({
        orderBy: { createdAt: "desc" }
      }),
      prisma.creativeMediaRequest.count()
    ]);

    return { total, items };
  }

  static async getById(id: number) {
    return prisma.creativeMediaRequest.findUnique({ where: { id } });
  }
}