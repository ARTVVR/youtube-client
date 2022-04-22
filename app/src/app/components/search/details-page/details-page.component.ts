import { Location } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from 'src/app/interfaces/search-item.model';
import ChangeColorPipe from 'src/app/pipes/change-color/change-color.pipe';
import DataService from 'src/app/services/data.service';
import { setRoundValues } from 'src/app/utils/utils';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export default class DetailsPageComponent implements OnInit, AfterViewChecked {
  @ViewChild('colorFrame')
  private postingPeriod: ElementRef | undefined;

  public card: IItem | undefined;

  private roundedValues: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private changeColorPipe: ChangeColorPipe,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCardId();
  }

  ngAfterViewChecked(): void {
    this.setColor();
  }

  private setColor(): void {
    if (this.postingPeriod && this.card) {
      this.changeColorPipe.transform(this.card, this.postingPeriod);
      this.postingPeriod.nativeElement.style.borderColor =
        this.dataService.colorValue;
    }
  }

  private async getCardId(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    const cardId = routeParams.get('id');

    if (this.dataService.videoData) {
      this.card = this.dataService.videoData.find((item: IItem): boolean => {
        return `${item.id}` === cardId;
      });
    } else {
      this.location.back();
    }
  }

  public getRoundedValues(value: string): string {
    this.roundedValues = setRoundValues(value);
    return this.roundedValues;
  }
}
