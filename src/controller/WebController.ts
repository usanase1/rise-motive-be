import { Get, Post, Put, Delete, Route, Tags, Body, Path, SuccessResponse } from "tsoa";
import { WebDigitalService } from "../services/Web";
import { CreateWebDigitalRequest, UpdateWebDigitalRequest } from "../types";

@Route("web-digital")
@Tags("Web & Digital")
export class WebDigitalController {

  // CREATE
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateWebDigitalRequest) {
    return WebDigitalService.create(body);
  }

  // GET ALL
  @Get("/")
  public async getAll() {
    return WebDigitalService.getAll();
  }

  // GET ONE BY ID
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return WebDigitalService.getById(id);
  }

  // UPDATE
  @Put("/{id}")
  public async update(
    @Path() id: number,
    @Body() body: UpdateWebDigitalRequest
  ) {
    return WebDigitalService.update(id, body);
  }

  // DELETE
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return WebDigitalService.delete(id);
  }
}