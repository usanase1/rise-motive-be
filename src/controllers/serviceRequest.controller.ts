import { Route, Post, Get, Patch, Delete, Body, Path, Query, Res, TsoaResponse, Tags } from 'tsoa';
import { ServiceRequestService } from "../services/serviceRequest.service";
import { CreateServiceRequestDto, UpdateRequestStatusDto } from "../dtos/serviceRequest.dto";
import { ApiResponse } from "../utils/apiResponse";

const service = new ServiceRequestService();

interface ServiceRequestResponse {
  id: number;
  trackingCode: string;
  customerName: string;
  customerPhone: string;
  serviceCategory: string;
  service: string | null;
  description: string;
  documentUrl?: string | null;
  preferredDate?: string | null;
  location: string | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  tasker?: {
    name: string;
    phone: string;
    email?: string | null;
  } | null;
  statusHistory?: Array<{
    status: string;
    note: string | null;
    createdAt: Date;
  }>;
}

@Tags('Service Requests')
@Route('service-requests')
export class ServiceRequestController {

  @Post()
  public async create(
    @Body() requestBody: CreateServiceRequestDto,
    @Res() successResponse: TsoaResponse<201, ApiResponse<ServiceRequestResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.createRequest(requestBody);
      successResponse(201, new ApiResponse(true, "Service request submitted successfully", data));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }

  @Get('track/{trackingCode}')
  public async track(
    @Path() trackingCode: string,
    @Res() successResponse: TsoaResponse<200, ApiResponse<ServiceRequestResponse>>,
    @Res() notFoundResponse: TsoaResponse<404, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.trackRequest(trackingCode);
      successResponse(200, new ApiResponse(true, "Request found", data));
    } catch (error: any) {
      notFoundResponse(404, new ApiResponse(false, error.message));
    }
  }

  @Get()
  public async getAll(
    @Query() status: string | undefined,
    @Res() successResponse: TsoaResponse<200, ApiResponse<ServiceRequestResponse[]>>,
    @Res() errorResponse: TsoaResponse<500, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.getAllRequests(status);
      successResponse(200, new ApiResponse(true, "Requests fetched", data));
    } catch (error: any) {
      errorResponse(500, new ApiResponse(false, error.message));
    }
  }

  @Get('{id}')
  public async getById(
    @Path() id: number,
    @Res() successResponse: TsoaResponse<200, ApiResponse<ServiceRequestResponse>>,
    @Res() notFoundResponse: TsoaResponse<404, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.getRequestById(id);
      successResponse(200, new ApiResponse(true, "Request found", data));
    } catch (error: any) {
      notFoundResponse(404, new ApiResponse(false, error.message));
    }
  }

  @Patch('{id}/status')
  public async updateStatus(
    @Path() id: number,
    @Body() requestBody: UpdateRequestStatusDto,
    @Res() successResponse: TsoaResponse<200, ApiResponse<ServiceRequestResponse>>,
    @Res() errorResponse: TsoaResponse<400, ApiResponse<null>>
  ): Promise<void> {
    try {
      const data = await service.updateStatus(id, requestBody);
      successResponse(200, new ApiResponse(true, "Status updated successfully", data));
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
      const data = await service.deleteRequest(id);
      successResponse(200, new ApiResponse(true, data.message));
    } catch (error: any) {
      errorResponse(400, new ApiResponse(false, error.message));
    }
  }
}