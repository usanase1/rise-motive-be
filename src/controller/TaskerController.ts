import { Body, Delete, Get, Path, Post, Put, Route, Tags, SuccessResponse } from "tsoa";
import { TaskerService } from "../services/TaskerService";
import { CreateTaskerRequest, UpdateTaskerRequest } from "../types";

@Route("taskers")
@Tags("Taskers")
export class TaskerController {

  // GET ALL
  @Get("/")
  public async getAll() {
    return TaskerService.getAll();
  }

  // GET ONE
  @Get("/{id}")
  public async getOne(@Path() id: number) {
    return TaskerService.getOne(id);
  }

  // CREATE
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateTaskerRequest) {
    return TaskerService.create(body);
  }

  // UPDATE
  @Put("/{id}")
  public async update(
    @Path() id: number,
    @Body() body: UpdateTaskerRequest
  ) {
    return TaskerService.update(id, body);
  }

  // DELETE
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return TaskerService.delete(id);
  }

  // TOGGLE ACTIVE
  @Put("/{id}/toggle-active")
  public async toggleActive(@Path() id: number) {
    return TaskerService.toggleActive(id);
  }
}