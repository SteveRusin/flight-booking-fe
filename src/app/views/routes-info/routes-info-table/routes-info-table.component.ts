import { Component, Input } from '@angular/core';

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
  data: Route[] = [];

  @Input()
  isLoading = true;

  displayedColumns: (keyof Route)[] = [
    'id',
    'sourceAirport',
    'destinationAirport',
    'airline',
    'stops',
    'equipment',
    'codeShare',
  ];
}
