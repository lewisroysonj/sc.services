import { Controller, Get, UseInterceptors } from "@nestjs/common";
import handleSuccessResponse from "src/helper/response/handle-success";
import { LoggingInterceptor } from "src/interceptors/logging/logging.interceptor";
import { UserService } from "src/services/user.service";

@Controller('users')
@UseInterceptors(LoggingInterceptor)
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getAll() {
        return handleSuccessResponse(
            await this.userService.getAll(),
            'Users retrieved successfully'
        )
    }
}