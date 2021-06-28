import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from '@app/@core/http/api.service';
import { Countries } from './countries-model';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends ApiService {

  selectedCountryInfo: Countries ;   

  getCountries(params: any): Observable<any> {
    return this.get(`countries/`, params).pipe(
      map((response: any) => {
        response;
        return response;
      }),
      catchError(() => of('Error, could not load data'))
    );
  }


  setSelectedCountryInfo(countryInfo: Countries) {
    this.selectedCountryInfo = countryInfo;
  }
}
