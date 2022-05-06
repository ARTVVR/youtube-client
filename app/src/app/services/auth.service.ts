import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userOptions } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  public isToken: boolean = false;

  public userName: string | null = '';

  private currentUrl: Location = window.location;

  constructor(private router: Router) {
    this.userName = localStorage.getItem(userOptions.userName)
      ? localStorage.getItem(userOptions.userName)
      : 'Your name';
  }

  public isLoggedIn(): boolean {
    this.isToken = !!localStorage.getItem(userOptions.token);
    return this.isToken;
  }

  public logIn(): void {
    localStorage.setItem(userOptions.token, userOptions.fakeToken);
    localStorage.setItem(userOptions.userName, `${this.userName}`);
    this.router.navigate(['/']);
  }

  public logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.currentUrl.reload();
  }
}
