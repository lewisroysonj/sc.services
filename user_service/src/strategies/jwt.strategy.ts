import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { LoginDTO } from "src/dto/login.dto";
import { AuthLoginService } from "src/services/auth/login.service";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
    constructor(private authLoginService: AuthLoginService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // temp
            secretOrKey: 'secret',
        })
    }

    async validate(payload: LoginDTO) {
        console.log(payload)
        const user = await this.authLoginService.validateUser(payload.email, payload.password)
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}