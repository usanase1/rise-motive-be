import { Get, Post, Route, Tags, Body, Path } from "tsoa";
import { EGovService } from "../services/Egov";
import { CreateEGovRequest } from "../types";

@Route("egov")
@Tags("E-Government")
export class EGovController {

  @Post("/")
  public async create(@Body() body: CreateEGovRequest) {
    return EGovService.create(body);
  }

  @Get("/")
  public async getAll() {
    return EGovService.getAll();
  }

  @Get("/{id}")
  public async getById(@Path() id: number) {
    return EGovService.getById(id);
  }
}