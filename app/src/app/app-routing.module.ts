import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import SearchComponent from './components/main/search/search.component';
import DetailsPageComponent from './components/main/search/details-page/details-page.component';
import PageNotFoundComponent from './components/main/page-not-found/page-not-found.component';
import AuthComponent from './components/main/auth/auth.component';
import AuthGuard from './shared/auth/auth.guard';

const routes: Routes = [
  { path: '', component: SearchComponent, canActivate: [AuthGuard] },
  {
    path: 'details/:id',
    component: DetailsPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'authorisation', component: AuthComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export default class AppRoutingModule {}
