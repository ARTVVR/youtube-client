import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  MAX_THOUSAND_MILLION,
  MAX_THOUSAND_LENGTH,
  LENGTH_VALUES_FOR_SLICE,
} from 'src/app/constants/constants';
<<<<<<< HEAD:app/src/app/components/search/card-items/card-items.component.ts
import { IItem } from '../../../interfaces/search-item.model';
=======
import ChangeColorPipe from 'src/app/pipes/change-color/change-color.pipe';
import FilterService from 'src/app/services/filter.service';
import { IItem } from '../../../../interfaces/search-item.model';
>>>>>>> 94c7146 (feat: add routing and details with auth pages):app/src/app/components/main/search/card-items/card-items.component.ts

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss'],
})
export default class CardItemsComponent implements AfterViewChecked {
  @Input() card!: IItem;

  @ViewChild('colorFrame')
  postingPeriod: ElementRef | undefined;

  private roundedValues: string = '';

  constructor(
    private filterService: FilterService,
    private changeColorPipe: ChangeColorPipe
  ) {}

  ngAfterViewChecked(): void {
    if (this.postingPeriod && this.card) {
      this.changeColorPipe.transform(this.card, this.postingPeriod);
      this.postingPeriod.nativeElement.style.borderColor =
        this.filterService.colorValue;
    }
  }

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
