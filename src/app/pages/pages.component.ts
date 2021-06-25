import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./pages.component.scss'],
})
export class PageComponent {
  title = 'covid';
}
