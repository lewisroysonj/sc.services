import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDTO } from "src/dto/login.dto";
import { User } from "src/entities/user.entity";
import { UserRepository } from "src/repositories/user/user.repository";

@Injectable()
export class AuthLoginService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userRepository: UserRepository
    ) {}

    async login(login: LoginDTO): Promise<{ accessToken: string }> {
        const payload = { email: login.email }
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }

    async validateUser(email: string, password: string): Promise<Partial<User>> {
        const user = await this.userRepository.getByEmail(email)
        if (user && user.password === password) {
            const { password, ...result } = user
            return result
        }
        return null
    }
}