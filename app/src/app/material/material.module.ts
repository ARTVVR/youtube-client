import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';

const MaterialComponents = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule,
  MatGridListModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class MaterialModule {}
