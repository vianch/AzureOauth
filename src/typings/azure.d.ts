interface AzureServiceMethods {
	
}

interface AuthorizationRequestResponse {
	code?: string,
	error?: string,
	state: string,
	error_description?: string,
	session_state?: string,
	admin_consent?: string,
}
