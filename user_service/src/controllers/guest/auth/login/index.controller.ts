import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { LoginDTO } from "src/dto/login.dto";
import { User } from "src/entities/user.entity";
import handleSuccessResponse, { HandleSuccessResponse } from "src/helper/response/handle-success";
import { LoggingInterceptor } from "src/interceptors/logging/logging.interceptor";
import { AuthLoginService } from "src/services/auth/login.service";

// guest/auth/login
@Controller()
@UseInterceptors(LoggingInterceptor)
export class AuthLoginController {
    constructor(private authLoginService: AuthLoginService) {}

    // guest/auth/login
    @Post()
    @HttpCode(HttpStatus.ACCEPTED)
    async login(@Body() login: LoginDTO): Promise<HandleSuccessResponse<Partial<User>>> {
        return handleSuccessResponse(
            await this.authLoginService.login(login),
            'Logged in successfully'
        )
    }
}