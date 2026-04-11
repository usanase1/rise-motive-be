import { Body, Get, Post, Put, Route, Tags, Security, Request } from "tsoa";
import { AuthService } from "../services/AuthServices";
import type { Request as ExpressRequest } from "express";

interface LoginRequest {
  email: string;
  password: string;
}

interface UpdateProfileRequest {
  fullName?: string;
  email?: string;
}

interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

@Route("auth")
@Tags("Auth")
export class AuthController {

  // LOGIN
  @Post("/login")
  public async login(@Body() body: LoginRequest) {
    return AuthService.login(body.email, body.password);
  }

  // GET PROFILE (requires auth)
  @Security("jwt")
  @Get("/profile")
  public async getProfile(@Request() request: ExpressRequest) {
    const adminId = (request as any).user.id;
    return AuthService.getProfile(adminId);
  }

  // UPDATE PROFILE (requires auth)
  @Security("jwt")
  @Put("/profile")
  public async updateProfile(
    @Request() request: ExpressRequest,
    @Body() body: UpdateProfileRequest
  ) {
    const adminId = (request as any).user.id;
    return AuthService.updateProfile(adminId, body);
  }

  // CHANGE PASSWORD (requires auth)
  @Security("jwt")
  @Put("/change-password")
  public async changePassword(
    @Request() request: ExpressRequest,
    @Body() body: ChangePasswordRequest
  ) {
    const adminId = (request as any).user.id;
    return AuthService.changePassword(
      adminId,
      body.currentPassword,
      body.newPassword
    );
  }

  // LOGOUT (requires auth)
  @Security("jwt")
  @Post("/logout")
  public async logout(@Request() request: ExpressRequest) {
    const adminId = (request as any).user.id;
    const token = (request as any).headers.authorization?.split(" ")[1];
    return AuthService.logout(adminId, token);
  }
}