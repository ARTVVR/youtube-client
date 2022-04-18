import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  public isToken: boolean = false;

  constructor(private router: Router) {}

  public isLoggedIn(): boolean {
    this.isToken = !!localStorage.getItem('token');
    return this.isToken;
  }

  public logIn(): void {
    if (!this.isToken) {
      localStorage.setItem('token', '0123456789');
    }
  }

  public logOut(): void {
    const currentRoute = this.router.url === '/' ? 'authorization' : '/';
    localStorage.removeItem('token');
    this.router.navigate([currentRoute]);
  }
}
