import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFullUser, IUserCredentials, ILoggedUser } from '../models/user.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URI: string = `${environment.apiUri}`;
  private isLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());
  public isLoggedIn: Observable<boolean> = this.isLoginSubject.asObservable();

  constructor(private readonly http: HttpClient, private router: Router) {}

  createUser(user: IFullUser): Observable<HttpResponse<ILoggedUser>> {
    return this.http.post<ILoggedUser>(this.API_URI + '/users', user, {
      observe: 'response',
    });
  }

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  login(credentials: IUserCredentials): Observable<string> {
    return this.http
      .post<IUserCredentials>(this.API_URI + '/users/sign_in', credentials, {
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
    this.router.navigate(['/login']);
  }

  updateSubject(state: boolean): void {
    this.isLoginSubject.next(state);
  }
}
