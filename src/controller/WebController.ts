import { Get, Post, Route, Tags, Body, Path } from "tsoa";
import { WebDigitalService } from "../services/Web";
import { CreateWebDigitalRequest } from "../types";

@Route("web-digital")
@Tags("Web & Digital")
export class WebDigitalController {

  // CREATE
  @Post("/")
  public async create(
    @Body() body: CreateWebDigitalRequest
  ) {
    return WebDigitalService.create(body);
  }

  // GET ALL
  @Get("/")
  public async getAll() {
    return WebDigitalService.getAll();
  }

  // GET BY ID
  @Get("/{id}")
  public async getById(
    @Path() id: number
  ) {
    return WebDigitalService.getById(id);
  }
}