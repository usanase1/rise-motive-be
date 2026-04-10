import { Body, Delete, Get, Path, Post, Put, Route, Tags } from "tsoa";
import { TaskerService } from "../services/TaskerService";
import { CreateTaskerRequest } from "../types";

@Route("taskers")
@Tags("Taskers")
export class TaskerController {

  @Get("/")
  public async getAll() {
    return TaskerService.getAll();
  }

  @Get("/{id}")
  public async getOne(@Path() id: number) {
    return TaskerService.getOne(id);
  }

  @Post("/")
  public async create(@Body() body: CreateTaskerRequest) {
    return TaskerService.create(body);
  }

  @Put("/{id}")
  public async update(
    @Path() id: number,
    @Body() body: CreateTaskerRequest
  ) {
    return TaskerService.update(id, body);
  }

  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return TaskerService.delete(id);
  }
}