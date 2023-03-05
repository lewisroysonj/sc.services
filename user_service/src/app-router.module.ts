import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { adminRoutes } from "./modules/admin/admin-routes";
import { guestRoutes } from "./modules/guest/guest-routes";

const routes = [
    adminRoutes,
    guestRoutes
]

@Module({
    imports: [RouterModule.register(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {}

