import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import AppComponent from './app.component';
import SearchWithFilterComponent from './components/header/search-with-filter/search-with-filter.component';
import LoginInformationBlockComponent from './components/header/login-information-block/login-information-block.component';
import MaterialModule from './material/material.module';
import CardItemsComponent from './components/main/card-items/card-items.component';
import SearchFilerPipe from './pipes/filter-data-statistics/filter-data-statistics.pipe';
import FilterByKeywordPipe from './pipes/filter-by-keyword/filter-by-keyword.pipe';
import FilterByCriteria from './pipes/filter-by-criteria/filter-by-criteria.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchWithFilterComponent,
    LoginInformationBlockComponent,
    CardItemsComponent,
    SearchFilerPipe,
    FilterByKeywordPipe,
    FilterByCriteria,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
