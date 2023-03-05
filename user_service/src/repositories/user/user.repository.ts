import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async getAll(): Promise<User[] | undefined> {
        return this.userRepository.find()
    }

    async getByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({ email })
    }

    async create(data: Partial<User>): Promise<User> {
        if (!data.roles) {
            data.roles = JSON.parse(`["ROLE_USER"]`)
        }
        const user = this.userRepository.create(data)
        return await this.userRepository.save(user)
    }
}