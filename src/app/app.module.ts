import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRouting } from "./app.routes";
import { CoreModule } from "./core/";
import { SharedModule } from "./shared/";
import { LoginComponent } from "./login/login.component";

@NgModule({
    imports: [
	    AppRouting,
        CoreModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}