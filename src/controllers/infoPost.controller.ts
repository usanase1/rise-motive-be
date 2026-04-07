import { Route, Post, Get, Put, Delete, Body, Path, Query, Res, TsoaResponse, Tags } from 'tsoa';
import { InfoPostService } from "../services/infoPost.service";
import { CreateInfoPostDto, UpdateInfoPostDto } from "../dtos/infoPost.dto";
import { ApiResponse } from "../utils/apiResponse";

const service = new InfoPostService();

interface InfoPostResponse {
  id: number;
  title: string;
  description: string;
  category: 'JOB' | 'SCHOLARSHIP' | 'COMPETITION' | 'COMMUNITY' | 'ADVISORY';
  deadline?: string | null;
  location?: string | null;
  applyLink?: string | null;
  contactInfo?: string | null;
  isActive: boolean;
  createdAt: Date;
}

@Tags('Information Posts')
@Route('info-posts')
export class InfoPostController {

  @Post()
  public async create(
    @Body() requestBody: CreateInfoPostDto,
    @Res() successResponse: TsoaResponse<201, ApiResponse<InfoPostResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.createPost(requestBody);
      successResponse(201, new ApiResponse(true, "Info post created successfully", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Get()
  public async getAll(
    @Res() successResponse: TsoaResponse<200, ApiResponse<InfoPostResponse[]>>,
    @Res() errorResponse: TsoaResponse<500, ApiResponse<null>>,
    @Query() category?: string
  ): Promise<void> {
    try {
      const data = await service.getAllPosts(category);
      successResponse(200, new ApiResponse(true, "Posts fetched", data));
    } catch (error: any) {
      errorResponse(500, new ApiResponse(false, error.message));
    }
  }

  @Get('{id}')
  public async getById(
    @Path() id: number,
    @Res() successResponse: TsoaResponse<200, ApiResponse<InfoPostResponse>>,
    @Res() notFoundResponse: TsoaResponse<404, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.getPostById(id);
      successResponse(200, new ApiResponse(true, "Post found", data));
    } catch (error: any) {
      notFoundResponse(404, new ApiResponse(false, error.message));
    }
  }

  @Put('{id}')
  public async update(
    @Path() id: number,
    @Body() requestBody: UpdateInfoPostDto,
    @Res() successResponse: TsoaResponse<200, ApiResponse<InfoPostResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.updatePost(id, requestBody);
      successResponse(200, new ApiResponse(true, "Post updated successfully", data));
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
      const data = await service.deletePost(id);
      successResponse(200, new ApiResponse(true, data.message));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }
}