import {
  Get,
  Post,
  Put,
  Delete,
  Route,
  Tags,
  Security,
  Body,
  Path,
  SuccessResponse,
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

@Route("admin")
@Tags("Admin")
export class AdminController {
  // GET ALL ADMINS
  @Security("jwt", ["SUPER_ADMIN"])
  @Get("/")
  public async getAllAdmins() {
    return AdminServices.getAllAdmins();
  }

  // GET SINGLE ADMIN
  @Security("jwt", ["SUPER_ADMIN"])
  @Get("/{id}")
  public async getAdminById(@Path() id: number) {
    return AdminServices.getAdminById(id);
  }

  // CREATE ADMIN
  @Security("jwt", ["SUPER_ADMIN"])
  @SuccessResponse(201, "Created")
  @Post("/")
  public async createAdmin(@Body() body: CreateAdminBody) {
    return AdminServices.createAdmin(body);
  }

  // UPDATE ADMIN
  @Security("jwt", ["SUPER_ADMIN"])
  @Put("/{id}")
  public async updateAdmin(@Path() id: number, @Body() body: UpdateAdminBody) {
    return AdminServices.updateAdmin(id, body);
  }

  // ACTIVATE ADMIN
  @Security("jwt", ["SUPER_ADMIN"])
  @Put("/activate/{id}")
  public async activate(@Path() id: number) {
    return AdminServices.activateAdmin(id);
  }

  // DEACTIVATE ADMIN
  @Security("jwt", ["SUPER_ADMIN"])
  @Put("/deactivate/{id}")
  public async deactivate(@Path() id: number) {
    return AdminServices.deactivateAdmin(id);
  }

  // DELETE ADMIN
  @Security("jwt", ["SUPER_ADMIN"])
  @Delete("/{id}")
  public async deleteAdmin(@Path() id: number) {
    return AdminServices.deleteAdmin(id);
  }
}
