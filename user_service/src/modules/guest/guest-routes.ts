import { AuthRegisterModule } from "./auth/register.module";
import { GuestModule } from "./guest.module";

export const guestRoutes = {
    path: 'guest',
    module: GuestModule,
    children: [
        {
            path: "auth",
            children: [
                {
                    path: 'register',
                    module: AuthRegisterModule
                }
            ]
        }
    ]
}