import {
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Route,
  Tags,
  Body,
  Path,
  SuccessResponse,
} from "tsoa";
//import { RequestStatus } from "@prisma/client"; //  import the enum
import { WebDigitalService } from "../services/Web";
import {
  CreateWebDigitalRequest,
  UpdateWebDigitalRequest,
  RequestStatus,
} from "../types";

@Route("web-digital")
@Tags("Web & Digital")
export class WebDigitalController {
  @SuccessResponse(201, "Created")
  @Post("/")
  public async create(@Body() body: CreateWebDigitalRequest) {
    return WebDigitalService.create(body);
  }

  @Get("/")
  public async getAll() {
    return WebDigitalService.getAll();
  }

  @Get("/{id}")
  public async getById(@Path() id: number) {
    return WebDigitalService.getById(id);
  }

  @Put("/{id}")
  public async update(
    @Path() id: number,
    @Body() body: UpdateWebDigitalRequest,
  ) {
    return WebDigitalService.update(id, body);
  }

  // New: dedicated status update endpoint
  @Patch("/{id}/status")
  public async updateStatus(
    @Path() id: number,
    @Body() body: { status: RequestStatus },
  ) {
    //  Validate that the incoming value is a valid enum member
    if (!Object.values(RequestStatus).includes(body.status)) {
      throw new Error(`Invalid status: ${body.status}`);
    }
    return WebDigitalService.updateStatus(id, body.status);
  }

  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return WebDigitalService.delete(id);
  }
}
