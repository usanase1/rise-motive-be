import {
  Body,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Route,
  Tags,
  Security,
  SuccessResponse,
} from "tsoa";
import { TaskerService } from "../services/TaskerService";
import { CreateTaskerRequest, UpdateTaskerRequest } from "../types";

@Route("taskers")
@Tags("Taskers")
export class TaskerController {
  // GET ALL
  @Get("/")
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  public async getAll() {
    return TaskerService.getAll();
  }

  // GET ONE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/{id}")
  public async getOne(@Path() id: number) {
    return TaskerService.getOne(id);
  }

  // CREATE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateTaskerRequest) {
    return TaskerService.create(body);
  }

  // UPDATE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateTaskerRequest) {
    return TaskerService.update(id, body);
  }

  // DELETE
 @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return TaskerService.delete(id);
  }

  // TOGGLE ACTIVE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}/toggle-active")
  public async toggleActive(@Path() id: number) {
    return TaskerService.toggleActive(id);
  }
}
