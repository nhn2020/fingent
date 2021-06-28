import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../@auth';
import { CountriesPageComponent } from './countries-page/countries-page.component';
import { CountryDetailComponent } from './countries-page/country-detail/country-detail.component';
import { DashBoardPageComponent } from './dash-board-page/dash-board-page.component';
import { PageComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PageComponent,
  children: [
    {
      path: 'dashboard',
      component: DashBoardPageComponent,
      canActivate: [AuthenticationGuard],
    },
    {
      path: 'countries',
      component: CountriesPageComponent,
      canActivate: [AuthenticationGuard],
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'countries/:id',
      component: CountryDetailComponent,
    }
  ],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
