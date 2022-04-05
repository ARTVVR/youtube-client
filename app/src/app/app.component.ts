import { Component } from '@angular/core';
import FilterService from './services/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  constructor(private filterService: FilterService) {}

  getVisibility() {
    return this.filterService.visibleCardItems;
  }
}
