import { Injectable } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserRepository } from "src/repositories/user/user.repository";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getAll(): Promise<User[]> {
        return this.userRepository.getAll()
    }

    async create(data: Partial<User>): Promise<User> {
        return this.userRepository.create(data)
    }
}