import { Component } from "@angular/core";
import { ActivatedRoute, Params} from '@angular/router';

import { AzureService } from "../shared/services/azure.service";

@Component({
    moduleId: "azLoginId",
    selector: "az-login",
    templateUrl: "login.component.html",
	styleUrls: ["login.scss"],
})
export class LoginComponent {
	public loginLogs: Array<string> = [];
    
	constructor(
		private azureService: AzureService,
		private activatedRoute: ActivatedRoute) {
		this.getAuthorizationRequest();
    }
    
	public onAzureLogin(event: MouseEvent): void {
		event.preventDefault();
		this.azureService.requestAuthorizationCode();
	}
	
	private getAuthorizationRequest(): void {
		this.activatedRoute.queryParams.subscribe( (params: AuthorizationRequestResponse) => {
			if (params.code) {
				this.setLog(`state: ${params.state}`);
				this.setLog(`session_state: ${params.session_state}`);
				this.requestAccessToken(params);
			}
			
			if(params.error) {
				this.setLog(`ERROR: ${params.error_description}`);
			}
		});
	}
	
	private requestAccessToken(params: AuthorizationRequestResponse): void {
		if (this.azureService.isValidBrowser(params.state)) {
			
		} else {
			this.setLog(`ERROR: Is not valid browser`);
		}
	}
	
	private setLog(logData: string): void {
		this.loginLogs.push(logData);
	}
	
}
