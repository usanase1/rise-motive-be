import { prisma } from "../lib/prisma";
import { CreateProductRequest } from "../types";

export class ProductService {
  static async create(data: CreateProductRequest) {
    return prisma.product.create({ data });
  }

  static async getAll(category?: string) {
    const [items, total] = await Promise.all([
      prisma.product.findMany({
        where: category ? { category } : undefined,
        orderBy: { createdAt: "desc" },
      }),
      prisma.product.count({
        where: category ? { category } : undefined,
      }),
    ]);
    return { total, items };
  }

  static async getById(id: number) {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { orders: true },
    });
    if (!product) throw new Error("Product not found");
    return product;
  }

  static async update(id: number, data: CreateProductRequest) {
    await ProductService.getById(id);
    return prisma.product.update({ where: { id }, data });
  }

  static async toggleStock(id: number) {
    const product = await ProductService.getById(id);
    return prisma.product.update({
      where: { id },
      data: { inStock: !product.inStock },
    });
  }

  static async delete(id: number) {
    await ProductService.getById(id);
    return prisma.product.delete({ where: { id } });
  }
}
