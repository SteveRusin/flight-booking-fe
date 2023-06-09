import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EMPTY, Subscription, catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

import { RouteDto } from '../../api/api-routes';

import { RoutesInfoService } from './routes-info.service';

@Component({
  selector: 'app-routes-info',
  templateUrl: './routes-info.component.html',
  styleUrls: ['./routes-info.component.scss'],
  host: {
    class: 'with-fluid-height',
  },
  providers: [RoutesInfoService],
})
export class RoutesInfoComponent implements OnInit, OnDestroy {
  routes: RouteDto = {
    count: 0,
    data: [],
  };

  isLoading = true;

  private _sub?: Subscription;

  constructor(
    private _routesInfoService: RoutesInfoService,
    private _matSnackBar: MatSnackBar,
    private _translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.fetchPage(0);
  }

  ngOnDestroy(): void {
    this._sub?.unsubscribe();
  }

  onPageChange(event: PageEvent) {
    this.fetchPage(event.pageIndex);
  }

  private fetchPage(pageIndex: number) {
    this.isLoading = true;

    this._sub?.unsubscribe();

    this._sub = this._routesInfoService
      .getPage(pageIndex)
      .pipe(
        catchError(() => {
          this.isLoading = false;

          this._matSnackBar.open(
            this._translateService.instant('error.common'),
            '',
            {
              duration: 5_000,
            },
          );

          return EMPTY;
        }),
      )
      .subscribe({
        next: (routes) => {
          this.isLoading = false;
          this.routes = routes;
        },
      });
  }
}
