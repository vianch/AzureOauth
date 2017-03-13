class AzureConfigurations  {
	static baseUrl = "https://login.microsoftonline.com";
	static tenantId = "7e9321ce-1e4d-4612-80f9-a7c927dfeb1f";
	static clientId =  "4f3287a3-36fd-403b-a557-6aa74824eb3e";
	static redirectUri = encodeURIComponent("http://localhost:2222/login");
	static scopes = encodeURIComponent("openid profile offline_access");
	static stateWord = "%state%";
	static stateIdName = "stateId";
	static urlParams = `&response_type=code&redirect_uri=${AzureConfigurations.redirectUri}&response_mode=query&state=${AzureConfigurations.stateWord}`;
	static requestUrl = `${AzureConfigurations.baseUrl}/${AzureConfigurations.tenantId}/oauth2/authorize?client_id=${AzureConfigurations.clientId}${AzureConfigurations.urlParams}`;
}

export {AzureConfigurations}