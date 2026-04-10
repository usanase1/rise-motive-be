import { Body, Get, Post, Route, Tags } from "tsoa";
import { TrainingService } from "../services/TrainingService";

@Route("training")
@Tags("Training")
export class TrainingController {

  @Post("/")
  public async apply(@Body() body: any) {
    return TrainingService.create(body);
  }

  @Get("/")
  public async getAll() {
    return TrainingService.getAll();
  }
}