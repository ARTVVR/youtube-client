import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import AuthService from 'src/app/services/auth.service';
import { setFormGroup } from 'src/app/utils/utils';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  public isVisible: boolean = true;

  public formGroup: FormGroup = setFormGroup();

  constructor(public auth: AuthService) {}

  public onSubmit(): void {
    if (
      this.formGroup.controls['email'].valid &&
      this.formGroup.controls['password'].valid
    ) {
      this.auth.userName = this.formGroup.controls['email'].value;
      this.auth.logIn();
    }
  }
}
