import { Injectable } from "@nestjs/common";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "src/repositories/user/user.repository";

@ValidatorConstraint({ name: 'isUserAlreadyExist', async: true })
@Injectable()
export class IsUserAlreadyExist implements ValidatorConstraintInterface {
    constructor(
        private readonly userRepository: UserRepository
    ) {}

    async validate(email: string): Promise<boolean> {
        if (!email) {
           return true 
        }
        const user = await this.userRepository.getByEmail(email)
        return !user
    }
    
    defaultMessage(): string {
        return 'The provided email $value is already registered.'
    }
}