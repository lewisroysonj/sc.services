import { Body, Controller, HttpCode, HttpStatus, Post, UseInterceptors } from "@nestjs/common";
import { RegisterDTO } from "src/dto/register.dto";
import { User } from "src/entities/user.entity";
import handleSuccessResponse, { HandleSuccessResponse } from "src/helper/response/handle-success";
import { LoggingInterceptor } from "src/interceptors/logging/logging.interceptor";
import { AuthRegisterService } from "src/services/auth/register.service";

// guest/auth/register
@Controller('')
@UseInterceptors(LoggingInterceptor)
export class AuthRegisterController {
    constructor(private authRegisterService: AuthRegisterService) {}

    // guest/auth/register
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() register: RegisterDTO): Promise<HandleSuccessResponse<Partial<User>>> {
        return handleSuccessResponse(
            await this.authRegisterService.register(register),
            'Registration completed successfully'
        )
    }
}