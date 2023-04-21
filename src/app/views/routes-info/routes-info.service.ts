import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { ApiRoutesService, RouteDto } from '@api/api-routes';

const LIMIT = 100;

@Injectable()
export class RoutesInfoService {
  private _loadedPages = new Set<number>();
  private _routes: RouteDto = {
    count: 0,
    data: [],
  };

  constructor(private _apiRoutesService: ApiRoutesService) {}

  getPage(pageIndex: number): Observable<RouteDto> {
    const newOffset = pageIndex * LIMIT;

    if (this._loadedPages.has(pageIndex)) {
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
          this._loadedPages.add(pageIndex);
        }),
      );
  }
}
