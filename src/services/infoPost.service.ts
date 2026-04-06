import prisma from "../config/prisma";
import { CreateInfoPostDto, UpdateInfoPostDto } from "../dtos/infoPost.dto";

export class InfoPostService {

  async createPost(dto: CreateInfoPostDto) {
    return prisma.infoPost.create({ data: dto });
  }

  async getAllPosts(category?: string) {
    return prisma.infoPost.findMany({
      where: {
        isActive: true,
        ...(category ? { category: category as any } : {}),
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async getPostById(id: number) {
    const post = await prisma.infoPost.findUnique({ where: { id } });
    if (!post) throw new Error(`Post with ID ${id} not found`);
    return post;
  }

  async updatePost(id: number, dto: UpdateInfoPostDto) {
    return prisma.infoPost.update({ where: { id }, data: dto });
  }

  async deletePost(id: number) {
    await prisma.infoPost.delete({ where: { id } });
    return { message: "Post deleted successfully" };
  }
}