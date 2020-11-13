import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFullUser, IEmailAndPassword, ILoggedUser } from '../models/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URI: string = `${environment.apiUri}`;

  constructor(private readonly http: HttpClient) {}

  createUser(user: IFullUser): Observable<HttpResponse<ILoggedUser>> {
    return this.http.post<ILoggedUser>(this.API_URI + '/users', user, {
      observe: 'response',
    });
  }

  login(credentials: IEmailAndPassword): Observable<HttpResponse<IEmailAndPassword>> {
    return this.http.post<IEmailAndPassword>(this.API_URI + '/users/sign_in', credentials, {
      observe: 'response',
    });
  }
}
