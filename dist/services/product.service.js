"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class ProductService {
    async createProduct(dto) {
        return prisma_1.default.product.create({ data: dto });
    }
    async getAllProducts(category) {
        return prisma_1.default.product.findMany({
            where: {
                ...(category ? { category } : {}),
                inStock: true,
            },
            orderBy: { createdAt: "desc" },
        });
    }
    async getProductById(id) {
        const product = await prisma_1.default.product.findUnique({ where: { id } });
        if (!product)
            throw new Error(`Product with ID ${id} not found`);
        return product;
    }
    async updateProduct(id, dto) {
        return prisma_1.default.product.update({ where: { id }, data: dto });
    }
    async deleteProduct(id) {
        await prisma_1.default.product.delete({ where: { id } });
        return { message: "Product deleted successfully" };
    }
}
exports.ProductService = ProductService;
