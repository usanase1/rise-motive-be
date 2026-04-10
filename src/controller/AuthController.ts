import { Body, Post, Route, Tags } from "tsoa";
import { AuthService } from "../services/AuthServices";

interface LoginRequest {
  email: string;
  password: string;
}

@Route("auth")
@Tags("Auth")
export class AuthController {

  @Post("/login")
  public async login(@Body() body: LoginRequest) {
    return AuthService.login(body.email, body.password);
  }
}