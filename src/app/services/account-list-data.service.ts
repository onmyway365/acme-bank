import { Account } from './../view-models/account.model';
import { Injectable } from '@angular/core';

import { Observable, EMPTY, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountListDataService {
  private accountsEndpoint = 'http://localhost:8080/api/accounts';

  constructor(private http: HttpClient) {}

  getAccountList(): Observable<Account[]> {
    return this.http
      .get<Account[]>(this.accountsEndpoint)
      .pipe(catchError(this.errorHandler<Account[]>('getAccountList', [])));
  }

  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
