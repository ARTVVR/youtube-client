import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  LENGTH_VALUES_FOR_SLICE,
  MAX_THOUSAND_LENGTH,
  MAX_THOUSAND_MILLION,
} from 'src/app/constants/constants';
import { IItem } from 'src/app/interfaces/search-item.model';
import ChangeColorPipe from 'src/app/pipes/change-color/change-color.pipe';
import FilterService from 'src/app/services/filter.service';

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

  private dataBase: IItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private filterService: FilterService,
    private changeColorPipe: ChangeColorPipe,
    private router: Router
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
        this.filterService.colorValue;
    }
  }

  private async getCardId(): Promise<void> {
    await this.getDataBase();

    const routeParams = this.route.snapshot.paramMap;
    const cardId = routeParams.get('id');

    this.card = this.dataBase.find(
      (value: IItem): boolean => value.id === cardId
    );

    if (!this.card) {
      this.router.navigate(['/404']);
    }
  }

  private async getDataBase(): Promise<void> {
    this.dataBase = await FilterService.getData();
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
