import { Controller, Get, UseGuards, UseInterceptors } from "@nestjs/common";
import { JWTAuthGuard } from "src/guards/auth.guard";
import handleSuccessResponse from "src/helper/response/handle-success";
import { LoggingInterceptor } from "src/interceptors/logging/logging.interceptor";
import { UserService } from "src/services/user/user.service";

// admin/users
@Controller('')
@UseGuards(JWTAuthGuard)
@UseInterceptors(LoggingInterceptor)
export class AdminUserController {
    constructor(private userService: UserService) {}

    // admin/users
    @Get()
    async getAll() {
        return handleSuccessResponse(
            await this.userService.getAll(),
            'Users restrieved successfully'
        )
    }
}