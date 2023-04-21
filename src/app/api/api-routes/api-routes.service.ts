import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments';

import { RoutesQuery, RouteDto } from './api-routes.models';

@Injectable({
  providedIn: 'root',
})
export class ApiRoutesService {
  constructor(private _httpClient: HttpClient) {}

  getRoutes(query: RoutesQuery): Observable<RouteDto> {
    const params = new HttpParams()
      .set('limit', query.limit)
      .set('offset', query.offset);

    return this._httpClient.get<RouteDto>(
      `${environment.routesApiUrl}/routes`,
      {
        params,
      },
    );
  }
}
