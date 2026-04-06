import { Route, Post, Get, Patch, Body, Res, TsoaResponse, Request, Security, Path } from 'tsoa';
import { AuthService } from "../services/auth.service";
import { RegisterAdminDto, LoginDto } from "../dtos/auth.dto";
import { ApiResponse } from "../utils/apiResponse";
import prisma from "../config/prisma";

const service = new AuthService();

interface AdminResponse {
  id: number;
  fullName: string;
  email: string;
  role: 'SUPER_ADMIN' | 'ADMIN';
  isActive: boolean;
  createdAt: Date;
}

interface LoginResponse {
  token: string;
  admin: AdminResponse;
}

@Route('auth')
export class AuthController {

  @Post('register')
  @Security('bearerAuth', ['SUPER_ADMIN'])
  public async register(
    @Body() requestBody: RegisterAdminDto,
    @Res() successResponse: TsoaResponse<201, ApiResponse<AdminResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.register(requestBody);
      successResponse(201, new ApiResponse(true, "Admin registered successfully", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Post('setup')
  public async setup(
    @Body() requestBody: RegisterAdminDto,
    @Res() successResponse: TsoaResponse<201, ApiResponse<AdminResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      // Check if any admins exist at all
      const adminCount = await prisma.admin.count();
      if (adminCount > 0) {
        errorResponse(400, new ApiResponse(false, "System already initialized"));
        return;
      }

      // Force SUPER_ADMIN role for initial setup
      requestBody.role = "SUPER_ADMIN";
      const data = await service.register(requestBody);
      successResponse(201, new ApiResponse(true, "System initialized successfully", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Post('login')
  public async login(
    @Body() requestBody: LoginDto,
    @Res() successResponse: TsoaResponse<200, ApiResponse<LoginResponse>>,
    @Res() errorResponse: TsoaResponse<401, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.login(requestBody);
      successResponse(200, new ApiResponse(true, "Login successful", data));
    } catch (error: any) {
      errorResponse(401, new ApiResponse(false, error.message));
    }
  }

  @Get('profile')
  @Security('bearerAuth')
  public async getProfile(
    @Request() request: any,
    @Res() successResponse: TsoaResponse<200, ApiResponse<AdminResponse>>,
    @Res() errorResponse: TsoaResponse<404, ApiResponse<null>>
  ): Promise<void> {
    try {
      const adminId = request.user?.id;
      if (!adminId) throw new Error("Unauthorized");
      const data = await service.getProfile(adminId);
      successResponse(200, new ApiResponse(true, "Profile fetched", data));
    } catch (error: any) {
      errorResponse(404, new ApiResponse(false, error.message));
    }
  }

  @Get('admins')
  @Security('bearerAuth', ['SUPER_ADMIN'])
  public async getAllAdmins(
    @Res() successResponse: TsoaResponse<200, ApiResponse<AdminResponse[]>>,
    @Res() errorResponse: TsoaResponse<500, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.getAllAdmins();
      successResponse(200, new ApiResponse(true, "Admin list fetched", data));
    } catch (error: any) {
      errorResponse(500, new ApiResponse(false, error.message));
    }
  }

  @Patch('admins/{id}/deactivate')
  @Security('bearerAuth', ['SUPER_ADMIN'])
  public async deactivateAdmin(
    @Path() id: number,
    @Res() successResponse: TsoaResponse<200, ApiResponse<AdminResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.deactivateAdmin(id);
      successResponse(200, new ApiResponse(true, "Admin deactivated", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }
}