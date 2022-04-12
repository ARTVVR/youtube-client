import { Component } from '@angular/core';
import AuthService from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login-information-block',
  templateUrl: './login-information-block.component.html',
  styleUrls: ['./login-information-block.component.scss'],
})
export default class LoginInformationBlockComponent {
  constructor(private auth: AuthService) {}

  public get isLogged(): boolean {
    return this.auth.isLoggedIn();
  }

  public logOuting(): void {
    this.auth.logOut();
  }
}
