import { Module, UseGuards } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminUserController } from "src/controllers/admin/users/index.controller";
import { User } from "src/entities/user.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UserRepository } from "src/repositories/user/user.repository";
import { UserService } from "src/services/user/user.service";

@UseGuards(AuthGuard)
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