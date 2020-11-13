import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, throttleTime, take } from 'rxjs/operators';
import { IFullUser, IEmailAndPassword, ILoggedUser } from '../models/user.interface';
import { ROOT_URL } from '../global-constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = ROOT_URL;
  headers: HttpHeaders;
  constructor(private readonly http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  createUser(user: IFullUser): Observable<ILoggedUser> {
    return this.http
      .post<ILoggedUser>(this.baseUrl + '/users', user, { headers: this.headers })
      .pipe(
        take(1),
        map(($response) => {
          return $response;
        })
      );
  }

  login(credentials: IEmailAndPassword): Observable<HttpResponse<IEmailAndPassword>> {
    return this.http.post<IEmailAndPassword>(this.baseUrl + '/users/sign_in', credentials, {
      headers: this.headers,
      observe: 'response',
    });
  }
}
