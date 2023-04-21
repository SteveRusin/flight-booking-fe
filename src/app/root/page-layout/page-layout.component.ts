import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  host: {
    class: 'with-fluid-height',
  },
})
export class PageLayoutComponent {}
