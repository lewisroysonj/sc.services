import { IsDefined, IsEmail, IsJSON, IsNotEmpty, IsOptional, MinLength, Validate } from "class-validator"
import { IsUserAlreadyExist } from "src/validators/user/user-exist.validator"

export class RegisterDTO {
    @IsDefined()
    @IsNotEmpty()
    readonly fullName: string

    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    @Validate(IsUserAlreadyExist)
    readonly email: string

    @IsDefined()
    @IsNotEmpty()
    @MinLength(8)
    readonly password: string

    @IsOptional()
    @IsJSON()
    readonly roles: JSON
}