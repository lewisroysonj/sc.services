import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthLoginController } from "src/controllers/guest/auth/login/index.controller";
import { User } from "src/entities/user.entity";
import { UserRepository } from "src/repositories/user/user.repository";
import { AuthLoginService } from "src/services/auth/login.service";
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from "src/strategies/jwt.strategy";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ]),
        PassportModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '3600s' }
        })
    ],
    controllers: [AuthLoginController],
    providers: [AuthLoginService, UserRepository, JWTStrategy],
    exports: [AuthLoginService]
})
export class AuthLoginModule {}