import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable()
export class ApiService {
  constructor(public angularHttp: HttpClient) {}

  private _getHeadersConfig(isPostX = false) {
    let config: any = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    return config;
  }

  get(path: string, params: any): Observable<string> {
    return this.angularHttp
      .get(`${environment.serverUrl}${path}`, {
        headers: new HttpHeaders(this._getHeadersConfig()),
        params,
      })
      .pipe(
        map((response: any) => response),
        catchError(() => of('Error, could not load data'))
      );
  }
}
