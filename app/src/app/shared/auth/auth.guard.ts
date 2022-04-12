import { Injectable } from '@angular/core';

import { CanActivate, Router, UrlTree } from '@angular/router';

import { Observable, of } from 'rxjs';
import AuthService from './auth.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.isLoggedIn()) {
      return of(true);
    }
    this.router.navigate(['authorisation'], {
      queryParams: {
        auth: false,
      },
    });
    return of(false);
  }
}
