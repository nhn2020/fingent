import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesPageComponent } from './countries-page.component';

import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { FormsModule } from '@angular/forms';
import { ThousandPipeModule } from '@app/@pipes/thousandSuff/thousandSuffPipe.module';


@NgModule({
  declarations: [
    CountriesPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    ThousandPipeModule,
    // PanelModule,
    // DialogModule,
    DropdownModule,
    InputTextModule,
    // ButtonModule,
    // RippleModule,
    // RatingModule,
    BreadcrumbModule
  ]
})
export class CountriesPageModule { }
