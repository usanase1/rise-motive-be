"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoPostService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class InfoPostService {
    async createPost(dto) {
        return prisma_1.default.infoPost.create({ data: dto });
    }
    async getAllPosts(category) {
        return prisma_1.default.infoPost.findMany({
            where: {
                isActive: true,
                ...(category ? { category: category } : {}),
            },
            orderBy: { createdAt: "desc" },
        });
    }
    async getPostById(id) {
        const post = await prisma_1.default.infoPost.findUnique({ where: { id } });
        if (!post)
            throw new Error(`Post with ID ${id} not found`);
        return post;
    }
    async updatePost(id, dto) {
        return prisma_1.default.infoPost.update({ where: { id }, data: dto });
    }
    async deletePost(id) {
        await prisma_1.default.infoPost.delete({ where: { id } });
        return { message: "Post deleted successfully" };
    }
}
exports.InfoPostService = InfoPostService;
