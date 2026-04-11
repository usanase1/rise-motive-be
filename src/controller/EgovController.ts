import { Get, Post, Put, Delete, Route, Tags, Body, Path, SuccessResponse } from "tsoa";
import { EGovService } from "../services/Egov";
import { CreateEGovRequest, UpdateEGovRequest } from "../types";

@Route("egov")
@Tags("E-Government")
export class EGovController {

  // CREATE
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateEGovRequest) {
    return EGovService.create(body);
  }

  // GET ALL
  @Get("/")
  public async getAll() {
    return EGovService.getAll();
  }

  // GET ONE BY ID
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return EGovService.getById(id);
  }

  // UPDATE
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateEGovRequest) {
    return EGovService.update(id, body);
  }

  // DELETE
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return EGovService.delete(id);
  }
}