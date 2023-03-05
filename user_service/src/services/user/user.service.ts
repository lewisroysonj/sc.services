import { Injectable } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserRepository } from "src/repositories/user/user.repository";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getAll(): Promise<User[]> {
        return this.userRepository.getAll()
    }

    async create(data: Partial<User>): Promise<User> {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(data.password, salt)
        data.password = hashedPassword
        const user = await this.userRepository.create(data)
        delete user.password
        return user
    }
}