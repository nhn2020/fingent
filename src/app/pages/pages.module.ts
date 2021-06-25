import { NgModule } from '@angular/core';
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
  ],
  providers: [],
})
export class PageModule { }
