import { HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";

export const API_URL: string = 'http://delineaapi.herokuapp.com';

export const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })
};

export const handleError = (error) => {
    let errorMessage = '';
    if (error.error.error_description !== undefined) {
        errorMessage = error.error.error_description;
    } else {
        for (const key in error.error) {
            errorMessage = `ERROR: Field ${key}\nMessage: ${error.error[key][0]}`;
        }
        errorMessage === ('' || undefined) ? errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nConsulte o log para mais detalhes.` : null;
    }
    console.error(error.error);
    window.alert(errorMessage);
    return throwError(errorMessage);
}

export const CLIENT_ID: string = 'Rb6yDNb6muY6Wr9iGybl193VzO6BqOuleLGblg14';

export const CLIENT_SECRET: string = 'NjsLaIedGub9LC2xAKHIt7kiN4DiSBLolT74w2PYrOu4PPdRxCNqgZDLS1UlqwSQry2HSmRj21MWcOiKOuLq8UtsD0LBic26SxJAEHqf7AaZ5C6sOSG9WrHf3gOzJkmY';

export const GRANT_TYPE: string = 'password';