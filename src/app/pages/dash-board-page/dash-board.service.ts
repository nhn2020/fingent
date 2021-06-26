import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from '@app/@core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class DashBoardService extends ApiService {
  getGroup(params: any): Observable<any> {
    return this.get(`all/`, params).pipe(
      map((response: any) => {
        response;
        return response;
      }),
      catchError(() => of('Error, could not load data'))
    );
  }
}
