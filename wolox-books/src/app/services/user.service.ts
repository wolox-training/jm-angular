import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFullUser, IEmailAndPassword, ILoggedUser } from '../models/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URI: string = `${environment.apiUri}`;
  private isLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.hasToken());

  constructor(private readonly http: HttpClient) {}

  createUser(user: IFullUser): Observable<HttpResponse<ILoggedUser>> {
    return this.http.post<ILoggedUser>(this.API_URI + '/users', user, {
      observe: 'response',
    });
  }

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  login(credentials: IEmailAndPassword): Observable<string> {
    return this.http
      .post<IEmailAndPassword>(this.API_URI + '/users/sign_in', credentials, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const accessToken = response.headers.get('access-token');
          localStorage.setItem('token', accessToken);
          this.updateSubject(true);
          return accessToken;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.updateSubject(false);
  }

  updateSubject(state: boolean): void {
    this.isLoginSubject.next(state);
  }
}
