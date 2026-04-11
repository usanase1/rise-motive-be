import { prisma } from "../lib/prisma";

interface CreateProductRequest {
  name: string;
  description?: string;
  price?: string;
  category: string;
  imageUrl?: string;
  inStock?: boolean;
}

interface UpdateProductRequest {
  name?: string;
  description?: string;
  price?: string;
  category?: string;
  imageUrl?: string;
  inStock?: boolean;
}

export class ProductService {

  // CREATE
  static async create(data: CreateProductRequest) {
    return prisma.product.create({ data });
  }

  // GET ALL
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

  // GET ONE BY ID
  static async getById(id: number) {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { orders: true },
    });
    if (!product) throw new Error("Product not found");
    return product;
  }

  // UPDATE
  static async update(id: number, data: UpdateProductRequest) {
    await ProductService.getById(id); // 404 guard
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  // TOGGLE STOCK
  static async toggleStock(id: number) {
    const product = await ProductService.getById(id);
    return prisma.product.update({
      where: { id },
      data: { inStock: !product.inStock },
    });
  }

  // DELETE
  static async delete(id: number) {
    await ProductService.getById(id); // 404 guard
    return prisma.product.delete({ where: { id } });
  }
}