import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EMPTY, catchError, finalize } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

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
    private _translateService: TranslateService,
  ) {}

  onPageChange(event: PageEvent) {
    this.routes$ = this.getPage(event.pageIndex);
  }

  private getPage(pageIndex: number) {
    this.isLoading = true;

    return this._routesInfoService.getPage(pageIndex).pipe(
      finalize(() => (this.isLoading = false)),
      catchError(() => {
        this._matSnackBar.open(this._translateService.instant('error.common'));

        return EMPTY;
      }),
    );
  }
}
