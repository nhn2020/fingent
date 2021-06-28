import { NgModule } from '@angular/core';
import { CountriesPageModule } from './countries-page/countries-page.module';
import { DashBoardPageModule } from './dash-board-page/dash-board-page.module';
import { PagesRoutingModule } from './pages-routing.module';

import { PageComponent } from './pages.component';

@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    PagesRoutingModule,
    DashBoardPageModule,
    CountriesPageModule,
  ],
  providers: [],
})
export class PageModule { }
