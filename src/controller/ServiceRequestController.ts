import { Body, Get, Path, Post, Put, Route, Tags, Security } from "tsoa";
import { ServiceRequestService } from "../services/ServiceRequestService";

@Route("services")
@Tags("Service Requests")
export class ServiceRequestController {

  @Post("/")
  public async create(@Body() body: any) {
    return ServiceRequestService.create(body);
  }

  @Get("/")
  public async getAll() {
    return ServiceRequestService.getAll();
  }

  @Get("/{id}")
  public async getOne(@Path() id: number) {
    return ServiceRequestService.getOne(id);
  }

  @Put("/{id}/assign/{taskerId}")
  @Security("jwt", ["ADMIN", "SUPER_ADMIN"])
  public async assignTasker(
    @Path() id: number,
    @Path() taskerId: number
  ) {
    return ServiceRequestService.assignTasker(id, taskerId);
  }

  @Put("/{id}/status")
  @Security("jwt", ["ADMIN", "SUPER_ADMIN"])
  public async updateStatus(
    @Path() id: number,
    @Body() body: { status: string }
  ) {
    return ServiceRequestService.updateStatus(id, body.status);
  }
}