import { Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { SingUpComponent } from "./sing-up/sing-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const ROUTES : Routes = [
{path: 'menu', component: MenuComponent},
{ path: 'sing-up', component: SingUpComponent },
{ path: 'user-profile', component: UserProfileComponent },
{ path: '**', component: UserProfileComponent },
]

export { ROUTES};