import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import ChangeColorPipe from 'src/app/pipes/change-color/change-color.pipe';
import DataService from 'src/app/services/data.service';
import { setRoundValues } from 'src/app/utils/utils';
import { IItem } from '../../../interfaces/search-item.model';

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
    private dataService: DataService,
    private changeColorPipe: ChangeColorPipe
  ) {}

  ngAfterViewChecked(): void {
    if (this.postingPeriod && this.card) {
      this.changeColorPipe.transform(this.card, this.postingPeriod);
      this.postingPeriod.nativeElement.style.borderColor =
        this.dataService.colorValue;
    }
  }

  public getRoundedValues(value: string): string {
    this.roundedValues = setRoundValues(value);
    return this.roundedValues;
  }
}
