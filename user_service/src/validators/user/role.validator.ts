import { Injectable } from "@nestjs/common";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({ name: 'isUserAlreadyExist', async: true })
@Injectable()
export class IsValidRole implements ValidatorConstraintInterface {
    async validate(roles: Array<string>): Promise<boolean> {
        if (Array.isArray(roles) && roles.every((role) => typeof role === 'string')) {
            return true
        }
        return false
    }
    
    defaultMessage(): string {
        return 'The provided role is invalid.'
    }
}