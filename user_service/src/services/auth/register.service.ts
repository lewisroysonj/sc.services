import { Injectable } from "@nestjs/common";
import { RegisterDTO } from "src/dto/register.dto";
import { User } from "src/entities/user.entity";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthRegisterService {
    constructor(
        private readonly userService: UserService
    ) {}

    async register(register: RegisterDTO): Promise<User> {
        const user = await this.userService.create(register)
        delete user.password

        return user
    }
}