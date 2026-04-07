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
exports.AuthController = void 0;
const tsoa_1 = require("tsoa");
const auth_service_1 = require("../services/auth.service");
const validateDto_1 = require("../utils/validateDto");
const auth_dto_1 = require("../dtos/auth.dto");
const apiResponse_1 = require("../utils/apiResponse");
const service = new auth_service_1.AuthService();
/**
 * Authentication and Admin Management — JWT required for protected routes (SUPER_ADMIN/ADMIN roles)
 */
let AuthController = class AuthController {
    async register(requestBody, successResponse, errorResponse) {
        try {
            await (0, validateDto_1.validateDto)(auth_dto_1.RegisterAdminDto, requestBody);
            const data = await service.register(requestBody);
            successResponse(201, new apiResponse_1.ApiResponse(true, "Admin registered successfully", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async setup(requestBody, successResponse, errorResponse) {
        try {
            await (0, validateDto_1.validateDto)(auth_dto_1.RegisterAdminDto, requestBody);
            // Check if any admins exist at all
            // const adminCount = await prisma.admin.count();
            // if (adminCount > 0) {
            //   errorResponse(400, new ApiResponse(false, "System already initialized"));
            //   return;
            // }
            // Force SUPER_ADMIN role for initial setup
            requestBody.role = "SUPER_ADMIN";
            const data = await service.setup(requestBody);
            successResponse(201, new apiResponse_1.ApiResponse(true, "System initialized successfully", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async login(requestBody, successResponse, errorResponse) {
        try {
            await (0, validateDto_1.validateDto)(auth_dto_1.LoginDto, requestBody);
            const data = await service.login(requestBody);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Login successful", data));
        }
        catch (error) {
            errorResponse(401, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async verifyEmail(requestBody, successResponse, errorResponse) {
        try {
            await (0, validateDto_1.validateDto)(auth_dto_1.VerifyEmailDto, requestBody);
            const data = await service.verifyEmail(requestBody);
            successResponse(200, new apiResponse_1.ApiResponse(true, data.message, data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async getProfile(request, successResponse, errorResponse) {
        try {
            const adminId = request.user?.id;
            if (!adminId)
                throw new Error("Unauthorized");
            const data = await service.getProfile(adminId);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Profile fetched", data));
        }
        catch (error) {
            errorResponse(404, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async updateProfile(request, requestBody, successResponse, errorResponse) {
        try {
            const adminId = request.user?.id;
            if (!adminId)
                throw new Error("Unauthorized");
            await (0, validateDto_1.validateDto)(auth_dto_1.UpdateProfileDto, requestBody);
            const data = await service.updateProfile(adminId, requestBody);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Profile updated", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async getAllAdmins(successResponse, errorResponse) {
        try {
            const data = await service.getAllAdmins();
            successResponse(200, new apiResponse_1.ApiResponse(true, "Admin list fetched", data));
        }
        catch (error) {
            errorResponse(500, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async deactivateAdmin(id, successResponse, errorResponse) {
        try {
            const data = await service.deactivateAdmin(id);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Admin deactivated", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
    async deleteAdmin(id, successResponse, errorResponse) {
        try {
            const data = await service.deleteAdmin(id);
            successResponse(200, new apiResponse_1.ApiResponse(true, "Admin permanently deleted", data));
        }
        catch (error) {
            errorResponse(400, new apiResponse_1.ApiResponse(false, error.message));
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, tsoa_1.Post)('register'),
    (0, tsoa_1.Security)('bearerAuth', ['SUPER_ADMIN']),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterAdminDto, Function, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, tsoa_1.Post)('setup'),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterAdminDto, Function, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "setup", null);
__decorate([
    (0, tsoa_1.Post)('login'),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDto, Function, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, tsoa_1.Post)('verify-email'),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.VerifyEmailDto, Function, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, tsoa_1.Get)('profile'),
    (0, tsoa_1.Security)('bearerAuth'),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Function, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, tsoa_1.Patch)('profile'),
    (0, tsoa_1.Security)('bearerAuth'),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Body)()),
    __param(2, (0, tsoa_1.Res)()),
    __param(3, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.UpdateProfileDto, Function, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfile", null);
__decorate([
    (0, tsoa_1.Get)('admins'),
    (0, tsoa_1.Security)('bearerAuth', ['SUPER_ADMIN']),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAllAdmins", null);
__decorate([
    (0, tsoa_1.Patch)('admins/{id}/deactivate'),
    (0, tsoa_1.Security)('bearerAuth', ['SUPER_ADMIN']),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deactivateAdmin", null);
__decorate([
    (0, tsoa_1.Delete)('admins/{id}'),
    (0, tsoa_1.Security)('bearerAuth', ['SUPER_ADMIN']),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deleteAdmin", null);
exports.AuthController = AuthController = __decorate([
    (0, tsoa_1.Tags)('Authentication'),
    (0, tsoa_1.Route)('auth')
], AuthController);
