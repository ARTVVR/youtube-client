import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppComponent from './app.component';
import SearchWithFilterComponent from './components/header/search-with-filter/search-with-filter.component';
import LoginInformationBlockComponent from './components/header/login-information-block/login-information-block.component';
import MaterialModule from './material/material.module';
import CardItemsComponent from './components/main/card-items/card-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchWithFilterComponent,
    LoginInformationBlockComponent,
    CardItemsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
