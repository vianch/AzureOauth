class AzureConfigurations  {
	static baseUrl = "https://login.microsoftonline.com";
	static tenantId = "7e9321ce-1e4d-4612-80f9-a7c927dfeb1f";
	static clientId =  "4f3287a3-36fd-403b-a557-6aa74824eb3e";
	static clientSecretId = "GzJ26xkP7IaXY75V9FHmygC47Ap%2BYNWflod8GT6AqHU=";
	static redirectUri = encodeURIComponent("http://localhost:2222/login");
	static resource = encodeURIComponent("https://graph.windows.net/");
	static scopes = encodeURIComponent("openid profile offline_access");
	static stateWord = "%state%";
	static tokenCodeWord = "%tokenCode%"
	static stateIdName = "stateId";
	static urlParams = `&response_type=code&redirect_uri=${AzureConfigurations.redirectUri}&response_mode=query&state=${AzureConfigurations.stateWord}`;
	static requestUrl = `${AzureConfigurations.baseUrl}/${AzureConfigurations.tenantId}/oauth2/authorize?client_id=${AzureConfigurations.clientId}${AzureConfigurations.urlParams}`;
	static requestAccessToken = `grant_type=authorization_code
        &client_id=${AzureConfigurations.clientId}
        &code=${AzureConfigurations.tokenCodeWord}
        &redirect_uri=${AzureConfigurations.redirectUri}
        &resource=${AzureConfigurations.resource}
        &client_secret=${AzureConfigurations.clientSecretId}`;
}

export {AzureConfigurations}