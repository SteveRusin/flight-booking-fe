import { Injectable } from '@angular/core';
import { Observable, of, share, tap } from 'rxjs';

import { ApiRoutesService, RouteDto } from '@api/api-routes';

const LIMIT = 100;

@Injectable()
export class RoutesInfoService {
  private _routes: RouteDto = {
    count: 0,
    data: [],
  };

  constructor(private _apiRoutesService: ApiRoutesService) {}

  getPage(pageIndex: number): Observable<RouteDto> {
    const newOffset = pageIndex * LIMIT;
    const dataAlreadyLoaded = this._routes.data[newOffset];

    if (dataAlreadyLoaded) {
      return of({
        ...this._routes,
        data: this._routes.data.slice(newOffset, newOffset + LIMIT),
      });
    }

    return this._apiRoutesService
      .getRoutes({
        limit: LIMIT,
        offset: pageIndex * LIMIT,
      })
      .pipe(
        tap((routes) => {
          this._routes = {
            ...routes,
            data: this._routes.data.concat(routes.data),
          };
        }),
      );
  }
}
