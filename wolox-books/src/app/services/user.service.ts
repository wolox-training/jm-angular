import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  IFullUser,
  IUserCredentials,
  ILoggedUser,
  IRequestCredentials,
} from '../models/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URI: string = `${environment.apiUri}`;
  private isLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());
  public isLoggedIn: Observable<boolean> = this.isLoginSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  createUser(user: IFullUser): Observable<HttpResponse<ILoggedUser>> {
    return this.http.post<ILoggedUser>(this.API_URI + '/users', user, {
      observe: 'response',
    });
  }

  getCredentials(): IRequestCredentials {
    return JSON.parse(localStorage.getItem('credentials'));
  }

  hasToken(): boolean {
    return !!localStorage.getItem('credentials');
  }

  login(credentials: IUserCredentials): Observable<string> {
    return this.http
      .post<IUserCredentials>(this.API_URI + '/users/sign_in', credentials, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const requestCredentials: IRequestCredentials = {
            token: response.headers.get('access-token'),
            client: response.headers.get('client'),
            uid: response.headers.get('uid'),
          };
          localStorage.setItem('credentials', JSON.stringify(requestCredentials));
          this.updateSubject(true);
          return requestCredentials.token;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('credentials');
    this.updateSubject(false);
  }

  updateSubject(state: boolean): void {
    this.isLoginSubject.next(state);
  }
}
