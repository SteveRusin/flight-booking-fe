import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Route } from '@api/api-routes';

@Component({
  selector: 'app-routes-info-table',
  templateUrl: './routes-info-table.component.html',
  styleUrls: ['./routes-info-table.component.scss'],
  host: {
    class: 'with-fluid-height',
  },
})
export class RoutesInfoTableComponent {
  @Input()
  set data(val: Route[] | undefined) {
    this._data = val;
  }

  get data(): Route[] {
    return this._data || [];
  }

  @Input()
  isLoading = true;

  @Input()
  pageSize = 100;

  @Input()
  set totalCount(val: number | undefined) {
    this._totalCount = val;
  }

  get totalCount() {
    return this._totalCount || 0;
  }

  @Output()
  pageChange = new EventEmitter<PageEvent>();

  displayedColumns: (keyof Route)[] = [
    'id',
    'sourceAirport',
    'destinationAirport',
    'airline',
    'stops',
    'equipment',
    'codeShare',
  ];

  private _data?: Route[];
  private _totalCount?: number;

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event);
  }
}
