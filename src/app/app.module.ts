import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRouting } from "./app.routes";
import { CoreModule } from "./core/";
import { SharedModule } from "./shared/";
import { LoginComponent } from "./login/login.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
    imports: [
	    AppRouting,
        CoreModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}