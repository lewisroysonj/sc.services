import { AdminUserModule } from "./user/user.module";
import { AdminModule } from "./admin.module";

export const adminRoutes = {
    path: 'admin',
    module: AdminModule,
    children: [
        {
            path: "users",
            module: AdminUserModule
        }
    ]
}