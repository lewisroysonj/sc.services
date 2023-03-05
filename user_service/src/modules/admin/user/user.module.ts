import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminUserController } from "src/controllers/admin/users/index.controller";
import { User } from "src/entities/user.entity";
import { UserRepository } from "src/repositories/user/user.repository";
import { UserService } from "src/services/user/user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ]),
    ],
    controllers: [AdminUserController],
    providers: [UserService, UserRepository],
})
export class AdminUserModule {}