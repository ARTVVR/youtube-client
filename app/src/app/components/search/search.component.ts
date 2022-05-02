import { Component } from '@angular/core';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent {
  constructor(public dataService: DataService) {}
}
