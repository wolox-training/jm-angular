import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const hasToken = this.userService.hasToken();
    if (hasToken) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  canLoad(): boolean {
    const hasToken = this.userService.hasToken();
    if (hasToken) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
