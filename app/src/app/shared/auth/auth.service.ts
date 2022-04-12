import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  public isExistToken: boolean = false;

  constructor(private router: Router) {}

  public isLoggedIn(): boolean {
    this.isExistToken = !!localStorage.getItem('token');
    return this.isExistToken;
  }

  public logOut(): void {
    if (this.isExistToken) {
      localStorage.removeItem('token');
      const currentRoute = this.router.url === '/' ? 'authorisation' : '/';
      this.router.navigate([currentRoute]);
    }
  }
}
