import { Route, Post, Get, Put, Delete, Body, Path, Res, TsoaResponse, Tags } from 'tsoa';
import { TaskerService } from "../services/tasker.service";
import { CreateTaskerDto, UpdateTaskerDto } from "../dtos/tasker.dto";
import { ApiResponse } from "../utils/apiResponse";

const service = new TaskerService();

interface TaskerResponse {
  id: number;
  name: string;
  phone: string;
  email?: string | null;
  specialties: string;
  isActive: boolean;
  createdAt: Date;
}

@Tags('Taskers')
@Route('taskers')
export class TaskerController {

  @Post()
  public async create(
    @Body() requestBody: CreateTaskerDto,
    @Res() successResponse: TsoaResponse<201, ApiResponse<TaskerResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.createTasker(requestBody);
      successResponse(201, new ApiResponse(true, "Tasker created successfully", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Get()
  public async getAll(
    @Res() successResponse: TsoaResponse<200, ApiResponse<TaskerResponse[]>>,
    @Res() errorResponse: TsoaResponse<500, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.getAllTaskers();
      successResponse(200, new ApiResponse(true, "Taskers fetched", data));
    } catch (error: any) {
      errorResponse(500, new ApiResponse(false, error.message));
    }
  }

  @Get('{id}')
  public async getById(
    @Path() id: number,
    @Res() successResponse: TsoaResponse<200, ApiResponse<TaskerResponse>>,
    @Res() notFoundResponse: TsoaResponse<404, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.getTaskerById(id);
      successResponse(200, new ApiResponse(true, "Tasker found", data));
    } catch (error: any) {
      notFoundResponse(404, new ApiResponse(false, error.message));
    }
  }

  @Put('{id}')
  public async update(
    @Path() id: number,
    @Body() requestBody: UpdateTaskerDto,
    @Res() successResponse: TsoaResponse<200, ApiResponse<TaskerResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.updateTasker(id, requestBody);
      successResponse(200, new ApiResponse(true, "Tasker updated successfully", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Delete('{id}')
  public async delete(
    @Path() id: number,
    @Res() successResponse: TsoaResponse<200, ApiResponse<{ message: string }>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.deleteTasker(id);
      successResponse(200, new ApiResponse(true, data.message));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }
}