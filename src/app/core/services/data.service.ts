import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public authSource = new BehaviorSubject(false);
  currentAuthState = this.authSource.asObservable();
  public welcomeSource = new BehaviorSubject('');
  public welcomeMessage = this.welcomeSource.asObservable();

  constructor() { }

  saveUserData(user: UserModel) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserData(): UserModel {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  deleteUserData() {
    sessionStorage.removeItem('user');
  }

  getAccessToken(): string {
    const user = this.getUserData();
    if (user) {
      return user.accessToken;
    }
    return '';
  }

  isAuthenticated(): boolean {
    const authenticated = !!this.getAccessToken();
    this.changeAuthStatus(authenticated);
    return authenticated;
  }

  isUserInRole(roleName: string): boolean {
    const user = this.getUserData();
    if (user) {
      return user.roles?.indexOf(roleName) >= 0;
    }
    return false;
  }

  isAdmin(): boolean {
    return this.isUserInRole('admin');
  }

  isUser(): boolean {
    return this.isUserInRole('user');
  }

  setWelcomeMessage(): void {
    const user = this.getUserData();
    if (user) {
      this.changeWelcomeMessage(user.firstName);
    }
  }

  changeAuthStatus(isAuthenticated: boolean) {
    this.authSource.next(isAuthenticated);
  }

  changeWelcomeMessage(message: string) {
    this.welcomeSource.next(message);
  }
}
