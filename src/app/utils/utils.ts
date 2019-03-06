import { HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";

export const API_URL: string = 'http://delineaapi.herokuapp.com';

export const  HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })
};

export const handleError = (error) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
    } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
}

export const CLIENT_ID: string = 'Rb6yDNb6muY6Wr9iGybl193VzO6BqOuleLGblg14';

export const CLIENT_SECRET: string = 'NjsLaIedGub9LC2xAKHIt7kiN4DiSBLolT74w2PYrOu4PPdRxCNqgZDLS1UlqwSQry2HSmRj21MWcOiKOuLq8UtsD0LBic26SxJAEHqf7AaZ5C6sOSG9WrHf3gOzJkmY';

export const GRANT_TYPE: string = 'password';