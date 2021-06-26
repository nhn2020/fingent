import { Component, OnInit } from '@angular/core';
import { CountryService } from './countries.service';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.scss'],
})
export class CountriesPageComponent implements OnInit {
  countryListData: any = [];
  items: any[] = [];

  sortOptions: any;

  sortOrder: any;

  sortKey: string = '';
  sortField: string = '';

  cities: any = [];
  selectedCity: any = {};

  constructor(private countryService: CountryService) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  ngOnInit(): void {
    this.getCountryListDetails();
    this.sortOptions = [
      { label: 'Country name', value: 'country' },
      { label: 'Number of cases', value: 'cases' },
      { label: 'Number of deaths', value: 'deaths' },
      { label: 'Number of recovered', value: 'recovered' },
    ];
    this.sortOrder = 1;
  }

  filter(value: string, dv: any) {
    dv.filter(value);
  }

  getCountryListDetails() {
    // this.loaderProvider.showLoader(Constants.LOADING_COMPONENT.ON_CALL_LOOKUP);
    this.countryService.getCountries({}).subscribe(
      (res) => {
        // this.loaderProvider.hideLoader(Constants.LOADING_COMPONENT.ON_CALL_LOOKUP);
        this.setData(res);
      },
      (err) => {
        // this.loaderProvider.hideLoader(Constants.LOADING_COMPONENT.ON_CALL_LOOKUP);
      }
    );
  }

  onSortChange(event: any) {
    let value = event.value;
    if (value === 'country') {
      this.sortOrder = 1;
      this.sortField = value;
    } else if (value === 'cases') {
      this.sortOrder = -1;
      this.sortField = value;
    } else if (value === 'deaths') {
      this.sortOrder = -1;
      this.sortField = value;
    } else if (value === 'recovered') {
      this.sortOrder = -1;
      this.sortField = value;
    }
  }

  setData(response: any) {
    this.countryListData = response;
  }

}
