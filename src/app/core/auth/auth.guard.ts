import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(public router: Router, public authGuard: AuthService) {}

  canActivate(): boolean {
    if (!this.authGuard.checkAuthenticated()) {
      this.router.navigateByUrl('auth/login');
      return false;
    }
    return true;
  }
  canActivateChild(): boolean {
    if (!this.authGuard.checkAuthenticated()) {
      this.router.navigateByUrl('auth/login');
      return false;
    }
    return true;
  }

}
