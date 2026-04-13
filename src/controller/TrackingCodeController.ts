import { Get, Patch, Route, Tags, Path, Body } from "tsoa";
import { TrackingService } from "../services/TrackingService";

interface TrackingUpdateRequest {
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  service?: string;
  description?: string;
  preferredDate?: string;
}

@Route("track")
@Tags("Tracking")
export class TrackingController {
  /**
   * Search for any request using its tracking code.
   * Returns full details, service type, status, and whether updates are allowed.
   */
  @Get("/{trackingCode}")
  public async getByTrackingCode(@Path() trackingCode: string) {
    return TrackingService.getByTrackingCode(trackingCode);
  }

  /**
   * Update a request using its tracking code.
   * Not allowed if status is COMPLETED or CANCELLED.
   */
  @Patch("/{trackingCode}")
  public async updateByTrackingCode(
    @Path() trackingCode: string,
    @Body() body: TrackingUpdateRequest,
  ) {
    return TrackingService.updateByTrackingCode(trackingCode, body);
  }
}
