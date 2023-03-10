import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthRegisterController } from "src/controllers/guest/auth/register/index.controller";
import { User } from "src/entities/user.entity";
import { UserRepository } from "src/repositories/user/user.repository";
import { AuthRegisterService } from "src/services/auth/register.service";
import { UserService } from "src/services/user/user.service";
import { IsUserAlreadyExist } from "src/validators/user/user-exist.validator";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ]),
    ],
    controllers: [AuthRegisterController],
    providers: [AuthRegisterService, UserService, UserRepository, IsUserAlreadyExist]
})
export class AuthRegisterModule {}