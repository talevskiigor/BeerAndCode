import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import { ConfigService } from './config.service';

@Injectable()
export class AuthService {

    constructor(private http: Http, private config: ConfigService) { }

    public login(user: string, pass: string) {

        let data = {
            username: user,
            passowrd: pass
        }
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(
            this.config.getApiUrl(),
            JSON.stringify(data),
            {headers: headers}
        )
        .map(res=>res.json())
        .do(data=>{
            console.log('We get data from the server:', JSON.stringify(data));

        }).catch(this.handleErrors);
        

    }

    public handleErrors(error){
        console.log("Error:", error);
        return Observable.throw(error);
    }
}