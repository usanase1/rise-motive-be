"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const generateTrackingCode_1 = require("../utils/generateTrackingCode");
class OrderService {
    async createOrder(dto) {
        // Verify product exists
        const product = await prisma_1.default.product.findUnique({
            where: { id: dto.productId },
        });
        if (!product)
            throw new Error(`Product with ID ${dto.productId} not found`);
        const trackingCode = (0, generateTrackingCode_1.generateTrackingCode)("ORD");
        const order = await prisma_1.default.order.create({
            data: {
                trackingCode,
                customerName: dto.customerName,
                customerPhone: dto.customerPhone,
                address: dto.address,
                quantity: dto.quantity,
                note: dto.note,
                productId: dto.productId,
                status: "PENDING",
            },
            include: { product: true },
        });
        return order;
    }
    async getAllOrders(status) {
        return prisma_1.default.order.findMany({
            where: status ? { status: status } : {},
            include: { product: true },
            orderBy: { createdAt: "desc" },
        });
    }
    async getOrderById(id) {
        const order = await prisma_1.default.order.findUnique({
            where: { id },
            include: { product: true },
        });
        if (!order)
            throw new Error(`Order with ID ${id} not found`);
        return order;
    }
    async trackOrder(trackingCode) {
        const order = await prisma_1.default.order.findUnique({
            where: { trackingCode },
            include: { product: true },
        });
        if (!order)
            throw new Error(`No order found with tracking code: ${trackingCode}`);
        return order;
    }
    async updateOrderStatus(id, dto) {
        return prisma_1.default.order.update({
            where: { id },
            data: {
                status: dto.status,
                paymentMethod: dto.paymentMethod,
            },
            include: { product: true },
        });
    }
    async deleteOrder(id) {
        await prisma_1.default.order.delete({ where: { id } });
        return { message: "Order deleted successfully" };
    }
}
exports.OrderService = OrderService;
