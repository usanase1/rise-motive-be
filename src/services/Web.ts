import { prisma } from "../lib/prisma";

export class WebDigitalService {

  static async create(data: any) {
    return prisma.webDigitalRequest.create({ data });
  }

  static async getAll() {
    const [items, total] = await Promise.all([
      prisma.webDigitalRequest.findMany({
        orderBy: { createdAt: "desc" }
      }),
      prisma.webDigitalRequest.count()
    ]);

    return { total, items };
  }

  static async getById(id: number) {
    return prisma.webDigitalRequest.findUnique({ where: { id } });
  }
}