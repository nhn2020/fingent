import { Component, OnInit } from '@angular/core';
import { DashBoardService } from './dash-board.service';

@Component({
  selector: 'app-dash-board-page',
  templateUrl: './dash-board-page.component.html',
  styleUrls: ['./dash-board-page.component.scss']
})
export class DashBoardPageComponent implements OnInit {

  dashBoardData: any = {};

  constructor(
    private dashBoardService: DashBoardService
  ) { }


  ngOnInit(): void {
    this._getDashBoardDetails();
  }

  private _getDashBoardDetails() {
    // this.loaderProvider.showLoader(Constants.LOADING_COMPONENT.ON_CALL_LOOKUP);
    this.dashBoardService.getGroup({}).subscribe(
      res => {
        // this.loaderProvider.hideLoader(Constants.LOADING_COMPONENT.ON_CALL_LOOKUP);
        this._setData(res);
      },
      err => {
        // this.loaderProvider.hideLoader(Constants.LOADING_COMPONENT.ON_CALL_LOOKUP);
      }
    );
  }

  private _setData(response: any) {
    this.dashBoardData = response;

  }

}
