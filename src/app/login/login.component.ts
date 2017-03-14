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
				this.authorizationRequestLogs(params);
				this.requestAccessToken(params);
			}
			
			if(params.error) {
				this.setLog(`ERROR: ${params.error_description}`);
			}
		});
	}
	
	private requestAccessToken(params: AuthorizationRequestResponse): void {
		if (this.azureService.isValidBrowser(params.state)) {
			this.azureService.requestAuthorizationToken(params.code).subscribe((response: AutorizationAccessResponse) => {
				this.accessTokenHandler(response);
			});
		} else {
			this.setLog(`ERROR: Is not valid browser`);
		}
	}

	private accessTokenHandler(response: AutorizationAccessResponse): void {
		if (response && response.access_token && response.id_token) {
			setTimeout(() => {this.setLog(`Thera authorized`); }, 2600);
			this.decodeUser(response.id_token);
		} else {
			this.setLog(`ERROR: Thera is Unauthorized`);
		}
	}

	private decodeUser(idToken: string): void {
		let base64Url = idToken.split('.')[1];
		let base64 = base64Url.replace('-', '+').replace('_', '/');
		let userInformation: JWTUserInformation = <JWTUserInformation>JSON.parse(window.atob(base64));
		setTimeout(() => {this.setLog(`Setting session`); }, 600);
		console.log(userInformation);
	}

	private authorizationRequestLogs(params: AuthorizationRequestResponse): void {
		this.setLog(`session_state: ${params.session_state}`);
		setTimeout(() => { this.setLog(`state: ${params.state}`); }, 1000);
		setTimeout(() => {this.setLog(`Logged in Azure successful`); }, 1800);
	}
	
	private setLog(logData: string): void {
		this.loginLogs.push(logData);
	}
	
}
