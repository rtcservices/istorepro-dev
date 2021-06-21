import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = new BehaviorSubject<boolean>(false);
  constructor(
    private dataService: DataService,
  ) { }

  public checkAuthenticated(): boolean {
    const authenticated =  this.dataService.isAuthenticated();
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  async login(userName: string, password: string): Promise<boolean> {
    // const transaction = await this.authClient.signIn({username, password});
    const isLoginSuccess = ((userName === "japan" && password === "1234")
    || (userName === "english" && password === "1234"));
    this.isAuthenticated.next(isLoginSuccess);
    if(isLoginSuccess) {
      const user: UserModel = {
        userName: userName,
        email: userName,
        firstName: '',
        lastName: '',
        accessToken: 'auth',
        roles: ['user']
      };
      this.dataService.saveUserData(user);
    }
    return isLoginSuccess;
  }

  async logout(): Promise<void> {
    this.dataService.deleteUserData();
    this.isAuthenticated.next(false);
  }
}
