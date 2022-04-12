import { Component } from '@angular/core';
import AuthService from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  public isHide: boolean = true;

  constructor(private auth: AuthService) {}

  public setToken(): void {
    if (!this.auth.isExistToken) {
      localStorage.setItem('token', '0123456789');
    }
  }
}
