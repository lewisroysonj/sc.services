import { Module } from "@nestjs/common";
import { AuthLoginModule } from "./auth/login.module";
import { AuthRegisterModule } from "./auth/register.module";

@Module({
    imports: [AuthRegisterModule, AuthLoginModule],
})
export class GuestModule {}