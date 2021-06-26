import { NgModule } from '@angular/core';

import { ThousandSuffixesPipe } from './thousandSuffPipe';

@NgModule({
  declarations: [ThousandSuffixesPipe],
  imports: [],
  exports: [ThousandSuffixesPipe],
})
export class ThousandPipeModule {}
