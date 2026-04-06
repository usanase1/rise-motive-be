"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const tsoa_1 = require("tsoa");
const order_service_1 = require("../services/order.service");
const order_dto_1 = require("../dtos/order.dto");
const apiResponse_1 = require("../utils/apiResponse");
const service = new order_service_1.OrderService();
let OrderController = class OrderController {
    async create(requestBody, successResponse, errorResponse) {
        try {
            const data = await service.createOrder(requestBody);
            successResponse(201, new apiResponse_1.ApiResponse(true, "Order placed successfully", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async track(trackingCode, successResponse, notFoundResponse) {
        try {
            const data = await service.trackOrder(trackingCode);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Order found", data));
        }
        catch (error) {
            notFoundResponse(404, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async getAll(successResponse, errorResponse, status) {
        try {
            const data = await service.getAllOrders(status);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Orders fetched", data));
        }
        catch (error) {
            errorResponse(500, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async getById(id, successResponse, notFoundResponse) {
        try {
            const data = await service.getOrderById(id);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Order found", data));
        }
        catch (error) {
            notFoundResponse(404, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async updateStatus(id, requestBody, successResponse, errorResponse) {
        try {
            const data = await service.updateOrderStatus(id, requestBody);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Order status updated", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async delete(id, successResponse, errorResponse) {
        try {
            const data = await service.deleteOrder(id);
            successResponse(200, new apiResponse_1.ApiResponse(true, data.message));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.CreateOrderDto, Function, Function]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
__decorate([
    (0, tsoa_1.Get)('track/{trackingCode}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function, Function]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "track", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.Get)('{id}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.Patch)('{id}/status'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __param(2, (0, tsoa_1.Res)()),
    __param(3, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_dto_1.UpdateOrderStatusDto, Function, Function]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateStatus", null);
__decorate([
    (0, tsoa_1.Delete)('{id}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "delete", null);
exports.OrderController = OrderController = __decorate([
    (0, tsoa_1.Route)('orders')
], OrderController);
