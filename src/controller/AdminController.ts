import {
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Route,
  Tags,
  Security,
  Body,
  Path,
  SuccessResponse,
  Response,
  Controller,
} from "tsoa";
import { AdminServices } from "../services/AdminService";

interface CreateAdminBody {
  fullName: string;
  email: string;
  password: string;
  role?: "ADMIN" | "SUPER_ADMIN";
}

interface UpdateAdminBody {
  fullName?: string;
  email?: string;
  password?: string;
  role?: "ADMIN" | "SUPER_ADMIN";
}

interface ErrorResponse {
  message: string;
  code?: string;
}

@Route("admin")
@Tags("Admin")
export class AdminController extends Controller {
  // GET ALL ADMINS
  @Security("jwt", ["SUPER_ADMIN","ADMIN"])
  @Get("/")
  public async getAllAdmins() {
    try {
      return await AdminServices.getAllAdmins();
    } catch (error) {
      this.setStatus(500);
      return { message: "Failed to fetch admins" } as ErrorResponse;
    }
  }

  // GET SINGLE ADMIN
  @Security("jwt", ["SUPER_ADMIN","ADMIN"])
  @Response<ErrorResponse>(404, "Admin not found")
  @Get("/{id}")
  public async getAdminById(@Path() id: number) {
    try {
      const admin = await AdminServices.getAdminById(Number(id)); // 👈 force cast
      if (!admin) {
        this.setStatus(404);
        return { message: "Admin not found" } as ErrorResponse;
      }
      return admin;
    } catch (error) {
      this.setStatus(500);
      return { message: "Failed to fetch admin" } as ErrorResponse;
    }
  }

  // CREATE ADMIN
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @SuccessResponse(201, "Created")
  @Response<ErrorResponse>(409, "Email already exists")
  @Post("/")
  public async createAdmin(@Body() body: CreateAdminBody) {
    try {
      const admin = await AdminServices.createAdmin(body);
      this.setStatus(201);
      return admin;
    } catch (error: any) {
      // Prisma unique constraint violation (duplicate email)
      if (error?.code === "P2002") {
        this.setStatus(409);
        return {
          message: "An admin with this email already exists",
          code: "P2002",
        } as ErrorResponse;
      }
      this.setStatus(500);
      return { message: "Failed to create admin" } as ErrorResponse;
    }
  }

  // UPDATE ADMIN
  @Security("jwt", ["SUPER_ADMIN","ADMIN"])
  @Response<ErrorResponse>(404, "Admin not found")
  @Put("/{id}")
  public async updateAdmin(@Path() id: number, @Body() body: UpdateAdminBody) {
    try {
      return await AdminServices.updateAdmin(Number(id), body); // 👈 force cast
    } catch (error: any) {
      if (error?.code === "P2025") {
        this.setStatus(404);
        return { message: "Admin not found" } as ErrorResponse;
      }
      if (error?.code === "P2002") {
        this.setStatus(409);
        return { message: "Email already in use" } as ErrorResponse;
      }
      this.setStatus(500);
      return { message: "Failed to update admin" } as ErrorResponse;
    }
  }

  // ACTIVATE ADMIN
@Security("jwt", ["SUPER_ADMIN", "ADMIN"])
@Patch("/activate/{id}")  // 
public async activate(@Path() id: number) {
  try {
    return await AdminServices.activateAdmin(Number(id));
  } catch (error: any) {
    if (error?.code === "P2025") {
      this.setStatus(404);
      return { message: "Admin not found" } as ErrorResponse;
    }
    this.setStatus(500);
    return { message: "Failed to activate admin" } as ErrorResponse;
  }
}

// DEACTIVATE ADMIN
@Security("jwt", ["SUPER_ADMIN", "ADMIN"])
@Patch("/deactivate/{id}")  // 
public async deactivate(@Path() id: number) {
  try {
    return await AdminServices.deactivateAdmin(Number(id));
  } catch (error: any) {
    if (error?.code === "P2025") {
      this.setStatus(404);
      return { message: "Admin not found" } as ErrorResponse;
    }
    this.setStatus(500);
    return { message: "Failed to deactivate admin" } as ErrorResponse;
  }
}

  // DELETE ADMIN
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Response<ErrorResponse>(404, "Admin not found")
  @Delete("/{id}")
  public async deleteAdmin(@Path() id: number) {
    try {
      await AdminServices.deleteAdmin(Number(id));
      this.setStatus(204);
    } catch (error: any) {
      if (error?.code === "P2025") {
        this.setStatus(404);
        return { message: "Admin not found" } as ErrorResponse;
      }
      this.setStatus(500);
      return { message: "Failed to delete admin" } as ErrorResponse;
    }
  }
}
