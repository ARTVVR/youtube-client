import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import AuthService from 'src/app/services/auth.service';
import { setFormGroup } from 'src/app/utils/utils';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export default class RegistrationComponent {
  public isVisible: boolean = true;

  public formGroup: FormGroup = setFormGroup();

  constructor(public auth: AuthService) {}

  public onSubmit(): void {
    if (this.formGroup.valid) {
      this.auth.userName = this.formGroup.controls['email'].value;
      this.auth.logIn();
    }
  }
}
