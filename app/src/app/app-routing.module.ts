import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import SearchComponent from './components/search/search.component';
import DetailsPageComponent from './components/search/details-page/details-page.component';
import PageNotFoundComponent from './components/page-not-found/page-not-found.component';
import AuthComponent from './components/auth/auth.component';
import AuthGuard from './components/auth/guards/auth.guard';
import RegistrationComponent from './components/registration/registration.component';

const routes: Routes = [
  { path: '', component: SearchComponent, canActivate: [AuthGuard] },
  {
    path: 'details/:id',
    component: DetailsPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'authorization', component: AuthComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export default class AppRoutingModule {}
