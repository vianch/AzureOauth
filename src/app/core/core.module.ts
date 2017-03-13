import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { LoginLogsComponent } from "./login-logs/login-logs.component";

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
    ],
    declarations: [LoginLogsComponent],
    providers: [],
})
export class CoreModule { }