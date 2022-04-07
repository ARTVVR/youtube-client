import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import AppComponent from './app.component';
import FilterSearchComponent from './components/header/filter-search/filter-search.component';
import UserComponent from './components/header/user/user.component';
import MaterialModule from './material/material.module';
import CardItemsComponent from './components/search/card-items/card-items.component';
import FilterByKeywordPipe from './pipes/filter-by-keyword/filter-by-keyword.pipe';
import FilterByCriteria from './pipes/filter-by-criteria/filter-by-criteria.pipe';
import ChangeColorPipe from './pipes/change-color/change-color.pipe';
import SearchComponent from './components/search/search.component';
import HeaderComponent from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterSearchComponent,
    UserComponent,
    CardItemsComponent,
    FilterByKeywordPipe,
    FilterByCriteria,
    ChangeColorPipe,
    SearchComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class AppModule {}
