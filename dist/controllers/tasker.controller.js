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
exports.TaskerController = void 0;
const tsoa_1 = require("tsoa");
const tasker_service_1 = require("../services/tasker.service");
const tasker_dto_1 = require("../dtos/tasker.dto");
const apiResponse_1 = require("../utils/apiResponse");
const service = new tasker_service_1.TaskerService();
let TaskerController = class TaskerController {
    async create(requestBody, successResponse, errorResponse) {
        try {
            const data = await service.createTasker(requestBody);
            successResponse(201, new apiResponse_1.ApiResponse(true, "Tasker created successfully", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async getAll(successResponse, errorResponse) {
        try {
            const data = await service.getAllTaskers();
            successResponse(200, new apiResponse_1.ApiResponse(true, "Taskers fetched", data));
        }
        catch (error) {
            errorResponse(500, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async getById(id, successResponse, notFoundResponse) {
        try {
            const data = await service.getTaskerById(id);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Tasker found", data));
        }
        catch (error) {
            notFoundResponse(404, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async update(id, requestBody, successResponse, errorResponse) {
        try {
            const data = await service.updateTasker(id, requestBody);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Tasker updated successfully", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async delete(id, successResponse, errorResponse) {
        try {
            const data = await service.deleteTasker(id);
            successResponse(200, new apiResponse_1.ApiResponse(true, data.message));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
};
exports.TaskerController = TaskerController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tasker_dto_1.CreateTaskerDto, Function, Function]),
    __metadata("design:returntype", Promise)
], TaskerController.prototype, "create", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], TaskerController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.Get)('{id}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], TaskerController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.Put)('{id}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __param(2, (0, tsoa_1.Res)()),
    __param(3, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tasker_dto_1.UpdateTaskerDto, Function, Function]),
    __metadata("design:returntype", Promise)
], TaskerController.prototype, "update", null);
__decorate([
    (0, tsoa_1.Delete)('{id}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], TaskerController.prototype, "delete", null);
exports.TaskerController = TaskerController = __decorate([
    (0, tsoa_1.Route)('taskers')
], TaskerController);
