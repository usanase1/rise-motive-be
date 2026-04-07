"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequestService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const generateTrackingCode_1 = require("../utils/generateTrackingCode");
const email_service_1 = require("./email.service");
const emailService = new email_service_1.EmailService();
class ServiceRequestService {
    // Customer submits a new service request
    async createRequest(dto) {
        const trackingCode = (0, generateTrackingCode_1.generateTrackingCode)("RM");
        const request = await prisma_1.default.serviceRequest.create({
            data: {
                trackingCode,
                customerName: dto.customerName,
                customerPhone: dto.customerPhone,
                customerEmail: dto.customerEmail,
                serviceCategory: dto.serviceCategory,
                service: dto.service,
                description: dto.description,
                documentUrl: dto.documentUrl,
                preferredDate: dto.preferredDate,
                location: dto.location,
                status: "PENDING",
                statusHistory: {
                    create: {
                        status: "PENDING",
                        note: "Request submitted by customer",
                    },
                },
            },
            include: {
                statusHistory: true,
                tasker: true,
            },
        });
        // Send email notifications to admin and customer
        emailService.sendRequestConfirmation(request.id).catch(console.error);
        return request;
    }
    // Customer tracks their request by tracking code
    async trackRequest(trackingCode) {
        const request = await prisma_1.default.serviceRequest.findUnique({
            where: { trackingCode },
            include: {
                statusHistory: {
                    orderBy: { createdAt: "asc" },
                },
                tasker: {
                    select: { name: true, phone: true },
                },
            },
        });
        if (!request) {
            throw new Error(`No request found with tracking code: ${trackingCode}`);
        }
        return request;
    }
    // Admin gets all requests
    async getAllRequests(status) {
        return prisma_1.default.serviceRequest.findMany({
            where: status ? { status: status } : {},
            include: {
                tasker: { select: { name: true, phone: true, email: true } },
                statusHistory: { orderBy: { createdAt: "desc" }, take: 1 },
            },
            orderBy: { createdAt: "desc" },
        });
    }
    // Admin gets one request by ID
    async getRequestById(id) {
        const request = await prisma_1.default.serviceRequest.findUnique({
            where: { id },
            include: {
                statusHistory: { orderBy: { createdAt: "asc" } },
                tasker: true,
                smsLogs: { orderBy: { createdAt: "desc" } },
            },
        });
        if (!request)
            throw new Error(`Request with ID ${id} not found`);
        return request;
    }
    // Admin updates request status
    async updateStatus(id, dto) {
        const request = await prisma_1.default.serviceRequest.update({
            where: { id },
            data: {
                status: dto.status,
                taskerId: dto.taskerId,
                statusHistory: {
                    create: {
                        status: dto.status,
                        note: dto.note,
                    },
                },
            },
            include: {
                tasker: true,
                statusHistory: { orderBy: { createdAt: "asc" } },
            },
        });
        emailService.sendStatusUpdate(request.id).catch(console.error);
        return request;
    }
    // Admin deletes a request
    async deleteRequest(id) {
        await prisma_1.default.statusHistory.deleteMany({ where: { serviceRequestId: id } });
        await prisma_1.default.smsLog.deleteMany({ where: { serviceRequestId: id } });
        await prisma_1.default.serviceRequest.delete({ where: { id } });
        return { message: "Request deleted successfully" };
    }
}
exports.ServiceRequestService = ServiceRequestService;
