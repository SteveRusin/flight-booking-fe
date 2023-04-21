import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EMPTY, catchError, finalize, merge } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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
export class RoutesInfoComponent {
  routes$ = this.getPage(0);

  isLoading = true;

  constructor(
    private _routesInfoService: RoutesInfoService,
    private _matSnackBar: MatSnackBar,
  ) {}

  onPageChange(event: PageEvent) {
    this.routes$ = this.getPage(event.pageIndex);
  }

  private getPage(pageIndex: number) {
    this.isLoading = true;

    return this._routesInfoService.getPage(pageIndex).pipe(
      finalize(() => (this.isLoading = false)),
      catchError(() => {
        // todo i18n
        this._matSnackBar.open('Something went wrong');

        return EMPTY;
      }),
    );
  }
}
