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

import { TrainingService } from "../services/TrainingService";
import { CreateTrainingRequest, UpdateTrainingRequest } from "../types";

type ApplicationStatus = "PENDING" | "APPROVED" | "REJECTED" | "COMPLETED";

interface UpdateStatusBody {
  status: ApplicationStatus;
}

@Route("training")
@Tags("Training")
export class TrainingController {
  // CREATE
  @SuccessResponse(201, "Created")
  @Post("/")
  public async apply(@Body() body: CreateTrainingRequest) {
    return TrainingService.create(body);
  }

  // GET ALL
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Get("/")
  public async getAll() {
    return TrainingService.getAll();
  }

  // GET ONE
  
  @Get("/{id}")
  public async getOne(@Path() id: number) {
    return TrainingService.getOne(id);
  }

  // UPDATE
  @Put("/{id}")
  public async update(@Path() id: number, @Body() body: UpdateTrainingRequest) {
    return TrainingService.update(id, body);
  }

  // UPDATE STATUS
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Put("/{id}/status")
  public async updateStatus(
    @Path() id: number,
    @Body() body: UpdateStatusBody,
  ) {
    return TrainingService.updateStatus(id, body.status);
  }

  // DELETE
  @Security("jwt", ["SUPER_ADMIN", "ADMIN"])
  @Delete("/{id}")
  public async delete(@Path() id: number) {
    return TrainingService.delete(id);
  }
}
