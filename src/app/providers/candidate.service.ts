import { API_URL, handleError, HTTP_OPTIONS } from './../utils/utils';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})

export class CandidateService {

  constructor(private http: HttpClient) { }

  getAllCandidates(): Observable<Candidate> {
    return this.http.get<Candidate>(API_URL + '/candidate/')
      .pipe(
        retry(1),
        catchError(handleError)
      );
  }

  createCandidate(candidate: Candidate): Observable<Candidate> {

    const body = this.mountBody(candidate, true);

    return this.http.post(API_URL + '/candidate/',
      body.toString(),
      HTTP_OPTIONS
    ).pipe(
      retry(1),
      catchError(handleError)
    );
  }

  updateCandidate(candidate: Candidate, changePassword: boolean): Observable<Candidate> {
    const body = this.mountBody(candidate, changePassword);

    return this.http.put(API_URL + '/candidate/' + candidate.id,
      body.toString(),
      HTTP_OPTIONS
    ).pipe(
      retry(1),
      catchError(handleError)
    );
  }

  deleteCandidate(id: number): Observable<Candidate> {
    let token: string = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.delete(API_URL + `/candidate/${id}/delete`,
      httpOptions
    )
      .pipe(
        retry(1),
        catchError(handleError)
      );
  }

  mountBody(candidate: Candidate, changePassword: boolean): HttpParams {
    let httpParams = new HttpParams()
      .set('name', candidate.name)
      .set('email', candidate.email)
      .set('cpf', candidate.cpf)
      .set('rg', candidate.rg.toString())
      .set('phone', candidate.phone)
      .set('username', candidate.username)
      .set('birth_date', candidate.birth_date);
    if (changePassword){
      httpParams = httpParams.set('password', candidate.password);
    }
    return httpParams;
  }
}
