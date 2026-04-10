import { Get, Post, Route, Tags, Body, Path } from "tsoa";
import { ApplicationDocService } from "../services/Application";
import { CreateApplicationDocRequest } from "../types";

@Route("application-docs")
@Tags("Application Documents")
export class ApplicationDocController {
  // CREATE NEW APPLICATION DOCUMENT REQUEST
  @Post("/")
  public async create(@Body() body: CreateApplicationDocRequest) {
    return ApplicationDocService.create(body);
  }

  // GET ALL APPLICATION DOCUMENT REQUESTS
  @Get("/")
  public async getAll() {
    return ApplicationDocService.getAll();
  }

  // GET ONE BY ID
  @Get("/{id}")
  public async getById(@Path() id: number) {
    return ApplicationDocService.getById(id);
  }
}
