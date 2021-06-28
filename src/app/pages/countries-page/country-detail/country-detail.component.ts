import { Component,OnDestroy,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Countries } from '../countries-model';

import { CountryService } from '../countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit, OnDestroy {

  countryDetail: Countries;

  routeInfo: any;
  mandatoryErrMsg: string;
  isFormSubmitted: boolean;
  countryDetailForm: FormGroup;
  activeRouteSubscription$: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.isFormSubmitted = false;
    this.mandatoryErrMsg = 'This field is required';
    this.activeRouteSubscription$ = new Subscription();
    this.initialiseCountryDetailForm();
    this.getRouteInfo();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.activeRouteSubscription$.unsubscribe();
  }

  initialiseCountryDetailForm() {
    this.countryDetailForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      cases: ['', [Validators.required]],
      deaths: ['', [Validators.required]],
      recovered: ['', [Validators.required]],
      tests: ['', [Validators.required]],
    });
  }

  getRouteInfo() {
    this.activeRouteSubscription$ = this.activatedRoute.params.subscribe(
      (params) => {
          if (params['id']) {
            this.countryDetail = this.countryService.selectedCountryInfo;
            this.patchCountryDetail(this.countryDetail);
          }
    });
  }

  patchCountryDetail(countryDetail: Countries) {
    if (countryDetail) {
      this.countryDetailForm.patchValue(countryDetail);
    }
  }

  onUpdateCountryDetails() {
    this.isFormSubmitted = true;
  }

  onCancelForm() {
    this.router.navigateByUrl('pages/countries');
  }


}
