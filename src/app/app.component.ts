import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'with-fluid-height',
  },
})
export class AppComponent {
  title = 'flight-booking-fe';
}
