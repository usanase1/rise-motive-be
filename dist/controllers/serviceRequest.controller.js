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
exports.ServiceRequestController = void 0;
const tsoa_1 = require("tsoa");
const serviceRequest_service_1 = require("../services/serviceRequest.service");
const serviceRequest_dto_1 = require("../dtos/serviceRequest.dto");
const apiResponse_1 = require("../utils/apiResponse");
const service = new serviceRequest_service_1.ServiceRequestService();
let ServiceRequestController = class ServiceRequestController {
    async create(requestBody, successResponse, errorResponse) {
        try {
            const data = await service.createRequest(requestBody);
            successResponse(201, new apiResponse_1.ApiResponse(true, "Service request submitted successfully", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async track(trackingCode, successResponse, notFoundResponse) {
        try {
            const data = await service.trackRequest(trackingCode);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Request found", data));
        }
        catch (error) {
            notFoundResponse(404, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async getAll(status, successResponse, errorResponse) {
        try {
            const data = await service.getAllRequests(status);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Requests fetched", data));
        }
        catch (error) {
            errorResponse(500, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async getById(id, successResponse, notFoundResponse) {
        try {
            const data = await service.getRequestById(id);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Request found", data));
        }
        catch (error) {
            notFoundResponse(404, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async updateStatus(id, requestBody, successResponse, errorResponse) {
        try {
            const data = await service.updateStatus(id, requestBody);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Status updated successfully", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async delete(id, successResponse, errorResponse) {
        try {
            const data = await service.deleteRequest(id);
            successResponse(200, new apiResponse_1.ApiResponse(true, data.message));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
};
exports.ServiceRequestController = ServiceRequestController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [serviceRequest_dto_1.CreateServiceRequestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], ServiceRequestController.prototype, "create", null);
__decorate([
    (0, tsoa_1.Get)('track/{trackingCode}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function, Function]),
    __metadata("design:returntype", Promise)
], ServiceRequestController.prototype, "track", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Function, Function]),
    __metadata("design:returntype", Promise)
], ServiceRequestController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.Get)('{id}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], ServiceRequestController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.Patch)('{id}/status'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __param(2, (0, tsoa_1.Res)()),
    __param(3, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, serviceRequest_dto_1.UpdateRequestStatusDto, Function, Function]),
    __metadata("design:returntype", Promise)
], ServiceRequestController.prototype, "updateStatus", null);
__decorate([
    (0, tsoa_1.Delete)('{id}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], ServiceRequestController.prototype, "delete", null);
exports.ServiceRequestController = ServiceRequestController = __decorate([
    (0, tsoa_1.Tags)('Service Requests'),
    (0, tsoa_1.Route)('service-requests')
], ServiceRequestController);
