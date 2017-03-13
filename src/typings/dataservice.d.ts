interface RestServiceMethods {
	getUrlData(url: string): Observable<Object>;
	getPostData(irl: string, body?: Object, options?: any): Observable<Object>;
}

interface Observable<T> {}
interface Response {}
interface ServerResponse {
	success?: string,
	ERROR?: string
}