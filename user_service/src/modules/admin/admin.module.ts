import { Module } from "@nestjs/common";
import { AdminUserModule } from "./user/user.module";

@Module({
    imports: [AdminUserModule],
})
export class AdminModule {}