import { prisma } from "../lib/prisma";
import { InfoCategory } from "@prisma/client";

interface CreateInfoPostRequest {
  title: string;
  description: string;
  category: InfoCategory;
  deadline?: string;
  location?: string;
  applyLink?: string;
  contactInfo?: string;
  isActive?: boolean;
}

interface UpdateInfoPostRequest {
  title?: string;
  description?: string;
  category?: InfoCategory;
  deadline?: string;
  location?: string;
  applyLink?: string;
  contactInfo?: string;
  isActive?: boolean;
}

export class InfoPostService {

  // CREATE
  static async create(data: CreateInfoPostRequest) {
    return prisma.infoPost.create({ data });
  }

  // GET ALL
  static async getAll(category?: InfoCategory, isActive?: boolean) {
    const where: any = {};
    if (category) where.category = category;
    if (isActive !== undefined) where.isActive = isActive;

    const [items, total] = await Promise.all([
      prisma.infoPost.findMany({
        where,
        orderBy: { createdAt: "desc" },
      }),
      prisma.infoPost.count({ where }),
    ]);

    return { total, items };
  }

  // GET ONE BY ID
  static async getById(id: number) {
    const post = await prisma.infoPost.findUnique({ where: { id } });
    if (!post) throw new Error("Info post not found");
    return post;
  }

  // UPDATE
  static async update(id: number, data: UpdateInfoPostRequest) {
    await InfoPostService.getById(id); // 404 guard
    return prisma.infoPost.update({
      where: { id },
      data,
    });
  }

  // TOGGLE ACTIVE
  static async toggleActive(id: number) {
    const post = await InfoPostService.getById(id);
    return prisma.infoPost.update({
      where: { id },
      data: { isActive: !post.isActive },
    });
  }

  // DELETE
  static async delete(id: number) {
    await InfoPostService.getById(id); // 404 guard
    return prisma.infoPost.delete({ where: { id } });
  }
}