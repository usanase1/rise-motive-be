import { Get, Post, Put, Route, Tags, Security, Body, Path } from "tsoa";
import {AdminServices} from "../services/AdminService"

@Route("admin")
@Tags("Admin")
export class AdminController {

  // SUPER ADMIN: get all admins
  @Security("jwt", ["SUPER_ADMIN"])
  @Get("/")
  public async getAllAdmins() {
    return AdminServices.getAllAdmins();
  }

  // activate admin
  @Security("jwt", ["SUPER_ADMIN"])
  @Put("/activate/{id}")
  public async activate(@Path() id: number) {
    return AdminServices.activateAdmin(id);
  }

  // deactivate admin
  @Security("jwt", ["SUPER_ADMIN"])
  @Put("/deactivate/{id}")
  public async deactivate(@Path() id: number) {
    return AdminServices.deactivateAdmin(id);
  }
}