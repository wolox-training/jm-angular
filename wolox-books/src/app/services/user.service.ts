import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFullUser } from '../models/user.interface';
import { ROOT_URL } from '../global-constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}
  baseUrl = ROOT_URL;
  createUser(user: IFullUser): Observable<IFullUser> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<IFullUser>(this.baseUrl + '/users', user, { headers })
      .pipe(
        map(($response) => {
          return $response;
        })
      );
  }
}
