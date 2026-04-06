import prisma from "../config/prisma";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";

export class ProductService {

  async createProduct(dto: CreateProductDto) {
    return prisma.product.create({ data: dto });
  }

  async getAllProducts(category?: string) {
    return prisma.product.findMany({
      where: {
        ...(category ? { category } : {}),
        inStock: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async getProductById(id: number) {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) throw new Error(`Product with ID ${id} not found`);
    return product;
  }

  async updateProduct(id: number, dto: UpdateProductDto) {
    return prisma.product.update({ where: { id }, data: dto });
  }

  async deleteProduct(id: number) {
    await prisma.product.delete({ where: { id } });
    return { message: "Product deleted successfully" };
  }
}