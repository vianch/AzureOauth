import { Injectable } from "@angular/core";
import {Http, Response, RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class RestService implements RestServiceMethods {
    constructor(private http: Http) {
    }

    public getUrlData(url: string): Observable<Object> {
        if (url) {
            return this.http.get(url)
                .map(this.extractData)
                .catch(this.handleError);
        }
    }

    public getPostData(url: string, body?: Object | string, options?: RequestOptionsArgs): Observable<Object> {
        if (url) {
            return this.http.post(url, (body) ? body : {}, (options) ? options : {})
                .map(this.extractData)
                .catch(this.handleError);
        }
    }

    private extractData(res: Response): Object {
        return res.json() || { };
    }

    private handleError (error: Response | any): Observable<Response | any> {
        return  Observable.throw(error);
    }
}