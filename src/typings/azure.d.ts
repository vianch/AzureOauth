interface AzureServiceMethods {
	requestAuthorizationCode(): void;
	isValidBrowser(state: string): boolean;
	requestAuthorizationToken(code: string): Observable<AutorizationAccessResponse>
}

interface AuthorizationRequestResponse {
	code?: string,
	error?: string,
	state: string,
	error_description?: string,
	session_state?: string,
	admin_consent?: string,
}

interface AutorizationAccessResponse {
	access_token: string,
	expires_in: string,
	expires_on: string,
	ext_expires_in: string,
	id_token: string,
	not_before: string,
	refresh_token: string,
	resource: string,
	scope: string,
	token_type: string,
}

interface JWTUserInformation {
	amr: Array<any>,
	aud: string,
	exp: number
	family_name: string,
	given_name: string
	iat: number,
	ipaddr: string,
	iss: string,
	name: string,
	nbf: number,
	oid: string,
	platf: string | number,
	sub: string,
	tid: string,
	unique_name: string,
	upn: string,
	ver: string,
}

interface Observable<T> {

}