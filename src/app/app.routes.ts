import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";

const APP_ROUTES: Routes = [
	{path: "", redirectTo: "/login", pathMatch: "full"},
	{path: "login", component: LoginComponent},
	{path: "login/:params", component: LoginComponent},
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);