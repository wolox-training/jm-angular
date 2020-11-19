import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UnAuthGuard implements CanActivate, CanLoad {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const hasToken = this.userService.hasToken();
    if (hasToken) this.router.navigate(['/books']);
    return !hasToken;
  }
  canLoad(): boolean {
    const hasToken = this.userService.hasToken();
    if (hasToken) this.router.navigate(['/books']);
    return !hasToken;
  }
}
