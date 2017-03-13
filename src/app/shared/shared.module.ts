import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import { RestService, AzureService, LocalStorageService } from "./services";

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
    ],
    declarations: [
    ],
    providers: [
        RestService, AzureService, LocalStorageService
    ],
})
export class SharedModule { }