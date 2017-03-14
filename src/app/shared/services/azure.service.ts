import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { RestService } from "./rest.service";
import { AzureConfigurations } from "./azure.config";
import { LocalStorageService } from "./local-storage.service";
import {Headers, RequestOptions} from "@angular/http";

@Injectable()
export class AzureService implements AzureServiceMethods {
    private requestUrl: string;
    
    constructor(
        private restService: RestService,
        private localStorage: LocalStorageService,
    ) {}
    
    public requestAuthorizationCode(): void {
        let stateId = this.generateStateId();
        this.requestUrl = AzureConfigurations.requestUrl.replace(AzureConfigurations.stateWord, stateId);
        this.localStorage.setItem(AzureConfigurations.stateIdName, { value: stateId, options: {} } );
        window.location.href = this.requestUrl;
    }
    
    public isValidBrowser(state: string): boolean {
        let getLocalStateId = this.localStorage.getItem(AzureConfigurations.stateIdName);
        if (getLocalStateId && getLocalStateId.value) {
            return getLocalStateId.value  === state;
        }
    }
    
    public requestAuthorizationToken(code: string): Observable<AutorizationAccessResponse> {
        let options = new RequestOptions({ headers:  new Headers({"Content-Type": "application/x-www-form-urlencoded",}) });
        let post = AzureConfigurations.requestAccessToken.replace(AzureConfigurations.tokenCodeWord, code);
        return this.restService.getPostData(`${AzureConfigurations.baseUrl}/${AzureConfigurations.tenantId}/oauth2/token`, post, options );
    }
    
    private generateStateId(): string {
        return  Math.random().toString(36).substring(7);
    }
}