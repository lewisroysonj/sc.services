import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "src/controllers/users/index.controller";
import { User } from "src/entities/user.entity";
import { UserRepository } from "src/repositories/user.repository";
import { UserService } from "src/services/user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ]),
    ],
    controllers: [UserController],
    providers: [UserRepository, UserService],
    exports: [UserService]
})
export class UserModule {}