import { Module } from "@nestjs/common";
import { AuthRegisterModule } from "./auth/register.module";

@Module({
    imports: [AuthRegisterModule],
})

export class GuestModule {}