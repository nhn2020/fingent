import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  selectedCity: any = {};

  constructor(private countryService: CountryService,  private router: Router) {

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

  ngAfterViewInit() {
    const paginator: any = document.getElementsByClassName('p-paginator-top');
    paginator[0].setAttribute('style', 'position:absolute; top: 7px; right: 50px');
    const dataView: any = document.getElementsByClassName('p-dataview-content');
    dataView[0].setAttribute('style', 'height:75vh; overflow: auto;');
    const header: any = document.getElementsByClassName('p-dataview-header');
    header[0].setAttribute('style', 'display:flex; justify-content: flex-start;');
  }

  filter(value: string, dv: any) {
    dv.filter(value);
  }

  getCountryListDetails() {
    this.countryService.getCountries({}).subscribe(
      (res) => {
        this.setData(res);
      },
      (err) => {
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

  onEditCountryDetails(country: any) {
    this.countryService.setSelectedCountryInfo(country);
    this.router.navigate([
      'pages/countries', 
      country.countryInfo._id
    ]);
  }

}
