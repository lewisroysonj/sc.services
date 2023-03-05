import { IsDefined, IsEmail, IsNotEmpty, IsOptional, MinLength, Validate } from "class-validator"

export class LoginDTO {
    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    // @Validate(IsUserAlreadyExist)
    readonly email: string

    @IsDefined()
    @IsNotEmpty()
    readonly password: string
}