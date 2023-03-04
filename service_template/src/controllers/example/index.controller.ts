import { Controller, Get, UseInterceptors } from "@nestjs/common";
import handleSuccessResponse from "src/helper/response/handle-success";
import { LoggingInterceptor } from "src/interceptors/logging/logging.interceptor";
import { ExampleService } from "src/services/example.service";

@Controller('examples')
@UseInterceptors(LoggingInterceptor)
export class ExampleController {
    constructor(private exampleService: ExampleService) {}

    @Get()
    async getAll() {
        return handleSuccessResponse(
            await this.exampleService.getAll(),
            'Examples retrieved successfully'
        )
    }
}