import { Module, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";
import { AdminUserModule } from "./user/user.module";

@Module({
    imports: [AdminUserModule],
})
export class AdminModule {}