import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExampleController } from "src/controllers/example/index.controller";
import { Example } from "src/entities/example.entity";
import { ExampleRepository } from "src/repositories/example.repository";
import { ExampleService } from "src/services/example.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Example
        ]),
    ],
    controllers: [ExampleController],
    providers: [ExampleRepository, ExampleService],
    exports: [ExampleService]
})
export class ExampleModule {}