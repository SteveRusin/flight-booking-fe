import { Component } from '@angular/core';

import { ApiRoutesService } from '@api/api-routes';

@Component({
  selector: 'app-routes-info',
  templateUrl: './routes-info.component.html',
  styleUrls: ['./routes-info.component.scss'],
  host: {
    class: 'with-fluid-height',
  },
})
export class RoutesInfoComponent {
  constructor(private _apiRoutesService: ApiRoutesService) {}
}
