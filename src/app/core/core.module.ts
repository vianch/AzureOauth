import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { LoginLogsComponent } from "./login-logs/login-logs.component";
import {LoadingComponent} from "./loading/loading.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
    ],
    exports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        LoginLogsComponent,
        LoadingComponent,
    ],
    declarations: [LoginLogsComponent, LoadingComponent],
    providers: [],
})
export class CoreModule { }