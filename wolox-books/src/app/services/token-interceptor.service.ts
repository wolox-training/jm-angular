import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';
import { IRequestCredentials } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req, next) {
    const userService = this.injector.get(UserService);
    const credentials: IRequestCredentials = userService.getCredentials();
    const tokenizeReq = req.clone({
      setHeaders: {
        'access-token': credentials ? `Bearer ${credentials.token}` : '',
        client: credentials ? credentials.client : '',
        uid: credentials ? credentials.uid : '',
      },
    });
    return next.handle(tokenizeReq);
  }
}
