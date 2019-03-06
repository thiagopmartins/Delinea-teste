import { API_URL, handleError } from './../utils/utils';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}
