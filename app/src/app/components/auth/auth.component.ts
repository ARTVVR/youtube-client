import { Component } from '@angular/core';
import AuthService from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  public isVisible: boolean = true;

  constructor(public auth: AuthService) {}
}
