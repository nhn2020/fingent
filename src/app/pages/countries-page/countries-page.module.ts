import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesPageComponent } from './countries-page.component';

import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [
    CountriesPageComponent
  ],
  imports: [
    CommonModule,
    DataViewModule
  ]
})
export class CountriesPageModule { }
