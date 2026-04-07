import { Route, Post, Get, Patch, Delete, Body, Path, Query, Res, TsoaResponse, Tags } from 'tsoa';
import { TrainingApplicationService } from "../services/trainingApplication.service";
import { CreateTrainingApplicationDto, UpdateTrainingApplicationDto } from "../dtos/trainingApplication.dto";
import { ApiResponse } from "../utils/apiResponse";

const service = new TrainingApplicationService();

interface TrainingApplicationResponse {
  id: number;
  fullName: string;
  phone: string;
  email?: string | null;
  selectedCourse: 'COMPUTER_FOUNDATIONS' | 'MICROSOFT_OFFICE' | 'GOOGLE_TOOLS' | 'E_GOVERNMENT_TOOLS' | 'DIGITAL_CONTENT_CREATION' | 'GRAPHIC_DESIGN' | 'AI_AND_DIGITAL_TOOLS' | 'BASIC_PROGRAMMING';
  preferredSchedule?: string | null;
  experienceLevel?: 'BEGINNER' | 'INTERMEDIATE' | null;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  createdAt: Date;
}

@Tags('Training Applications')
@Route('training-applications')
export class TrainingApplicationController {

  @Post()
  public async apply(
    @Body() requestBody: CreateTrainingApplicationDto,
    @Res() successResponse: TsoaResponse<201, ApiResponse<TrainingApplicationResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.applyForTraining(requestBody);
      successResponse(201, new ApiResponse(true, "Training application submitted successfully", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Get()
  public async getAll(
    @Res() successResponse: TsoaResponse<200, ApiResponse<TrainingApplicationResponse[]>>,
    @Res() errorResponse: TsoaResponse<500, ApiResponse<null>>,
    @Query() status?: string
  ): Promise<void> {
    try {
      const data = await service.getAllApplications(status);
      successResponse(200, new ApiResponse(true, "Applications fetched", data));
    } catch (error: any) {
      errorResponse(500, new ApiResponse(false, error.message));
    }
  }

  @Get('{id}')
  public async getById(
    @Path() id: number,
    @Res() successResponse: TsoaResponse<200, ApiResponse<TrainingApplicationResponse>>,
    @Res() notFoundResponse: TsoaResponse<404, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.getApplicationById(id);
      successResponse(200, new ApiResponse(true, "Application found", data));
    } catch (error: any) {
      notFoundResponse(404, new ApiResponse(false, error.message));
    }
  }

  @Patch('{id}/status')
  public async updateStatus(
    @Path() id: number,
    @Body() requestBody: UpdateTrainingApplicationDto,
    @Res() successResponse: TsoaResponse<200, ApiResponse<TrainingApplicationResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.updateApplicationStatus(id, requestBody);
      successResponse(200, new ApiResponse(true, "Application status updated", data));
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
      const data = await service.deleteApplication(id);
      successResponse(200, new ApiResponse(true, data.message));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }
}