import { Get, Post, Put, Delete, Route, Tags, Body, Path, SuccessResponse } from "tsoa";
import { ApplicationDocService } from "../services/Application";
import { CreateApplicationDocRequest, UpdateApplicationDocRequest } from "../types";

@Route("application-docs")
@Tags("Application Documents")
export class ApplicationDocController {

  // CREATE
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateApplicationDocRequest) {
    return ApplicationDocService.create(body);
  }

  // GET ALL
  @Get("/")
  public async getAll() {
    return ApplicationDocService.getAll();
  }

  // GET ONE BY ID
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return ApplicationDocService.getById(id);
  }

  // UPDATE
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateApplicationDocRequest) {
    return ApplicationDocService.update(id, body);
  }

  // DELETE
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return ApplicationDocService.delete(id);
  }
}