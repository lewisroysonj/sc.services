import { IsDefined, IsEmail, IsNotEmpty, IsOptional, MinLength, Validate } from "class-validator"
import { Roles } from "src/interfaces/user.interface"
import { IsValidRole } from "src/validators/user/role.validator"
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
    @Validate(IsValidRole)
    readonly roles: Roles
}