import { Component, Input } from '@angular/core';
import {
  MAX_THOUSAND_MILLION,
  MAX_THOUSAND_LENGTH,
  LENGTH_VALUES_FOR_SLICE,
} from 'src/app/constants/constants';
import { IItem } from '../../../interfaces/search-item.model';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss'],
})
export default class CardItemsComponent {
  @Input() card!: IItem;

  private roundedValues: string = '';

  public getRoundedValues(value: string): string {
    this.roundedValues = value;
    if (
      value.length >= MAX_THOUSAND_LENGTH &&
      value.length < MAX_THOUSAND_MILLION
    ) {
      this.roundedValues = `${value.slice(
        0,
        value.length - LENGTH_VALUES_FOR_SLICE
      )}k`;
    }
    if (value.length >= MAX_THOUSAND_MILLION) {
      this.roundedValues = `${value.slice(
        0,
        value.length - LENGTH_VALUES_FOR_SLICE * 2
      )}m`;
    }
    return this.roundedValues;
  }
}
