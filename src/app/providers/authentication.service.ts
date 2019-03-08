import { Token } from './../models/token.model';
import { CLIENT_ID, CLIENT_SECRET, GRANT_TYPE, HTTP_OPTIONS } from './../utils/utils';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, handleError } from '../utils/utils';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    constructor(private http: HttpClient) { }

    getToken(username: string, password: string): Observable<Token> {

        const body = new HttpParams()
            .set('client_id', CLIENT_ID)
            .set('client_secret', CLIENT_SECRET)
            .set('grant_type', GRANT_TYPE)
            .set('username', username)
            .set('password', password);

        return this.http.post<Token>(API_URL + '/o/token/',
            body.toString(),
            HTTP_OPTIONS
        )
            .pipe(
                retry(1),
                catchError(handleError)
            );
    }
}
