import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {
      onSameUrlNavigation: 'ignore',
    }),
    BrowserAnimationsModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
