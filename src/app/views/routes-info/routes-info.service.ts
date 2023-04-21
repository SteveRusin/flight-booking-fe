import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

import { ApiRoutesService, RouteDto } from '@api/api-routes';

const LIMIT = 100;

@Injectable()
export class RoutesInfoService {
  private _pagesCache = new Map<number, Observable<RouteDto>>();

  constructor(private _apiRoutesService: ApiRoutesService) {}

  getPage(pageIndex: number): Observable<RouteDto> {
    const cachedResponse = this._pagesCache.get(pageIndex);

    if (cachedResponse) {
      return cachedResponse;
    }

    const request = this._apiRoutesService
      .getRoutes({
        limit: LIMIT,
        offset: pageIndex * LIMIT,
      })
      .pipe(shareReplay(1));

    this._pagesCache.set(pageIndex, request);

    return request;
  }
}
