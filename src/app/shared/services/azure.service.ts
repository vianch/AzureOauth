import { Injectable } from "@angular/core";

import { RestService } from "./rest.service";
import { AzureConfigurations } from "./azure.config";
import { LocalStorageService } from "./local-storage.service";

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
    
    public requestAuthorizationToken(): void {
        /**
         * POST /{tenant}/oauth2/token HTTP/1.1
         Host: https://login.microsoftonline.com
         Content-Type: application/x-www-form-urlencoded
         grant_type=authorization_code
         &client_id=2d4d11a2-f814-46a7-890a-274a72a7309e
         &code=AwABAAAAvPM1KaPlrEqdFSBzjqfTGBCmLdgfSTLEMPGYuNHSUYBrqqf_ZT_p5uEAEJJ_nZ3UmphWygRNy2C3jJ239gV_DBnZ2syeg95Ki-374WHUP-i3yIhv5i-7KU2CEoPXwURQp6IVYMw-DjAOzn7C3JCu5wpngXmbZKtJdWmiBzHpcO2aICJPu1KvJrDLDP20chJBXzVYJtkfjviLNNW7l7Y3ydcHDsBRKZc3GuMQanmcghXPyoDg41g8XbwPudVh7uCmUponBQpIhbuffFP_tbV8SNzsPoFz9CLpBCZagJVXeqWoYMPe2dSsPiLO9Alf_YIe5zpi-zY4C3aLw5g9at35eZTfNd0gBRpR5ojkMIcZZ6IgAA
         &redirect_uri=https%3A%2F%2Flocalhost%2Fmyapp%2F
         &resource=https%3A%2F%2Fservice.contoso.com%2F
         &client_secret=p@ssw0rd
         */
        this.restService.getPostData(AzureConfigurations.baseUrl, "/easdasdasdasd/oauth2/token", {} );
    }
    
    private generateStateId(): string {
        return  Math.random().toString(36).substring(7);
    }
}