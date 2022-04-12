import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import SearchComponent from './components/main/search/search.component';
import DetailsPageComponent from './components/main/search/details-page/details-page.component';
import PageNotFoundComponent from './components/main/page-not-found/page-not-found.component';
import AuthComponent from './components/main/auth/auth.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'details/:id', component: DetailsPageComponent },
  { path: 'authorisation', component: AuthComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
