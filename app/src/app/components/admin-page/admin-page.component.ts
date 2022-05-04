import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { setCardsFormGroup } from 'src/app/utils/utils';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export default class AdminPageComponent {
  public cardsFormGroup: FormGroup = setCardsFormGroup();

  public isSubmit: boolean = false;

  public onSubmit(form: FormGroupDirective): void {
    if (this.cardsFormGroup.valid) {
      this.isSubmit = true;
      form.resetForm();
    }
  }
}
