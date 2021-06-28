import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantService } from '@app/shared/constants';
@Component({
  selector: 'app-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PageComponent {

  constructor(private router: Router, constantsService: ConstantService) {

  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
