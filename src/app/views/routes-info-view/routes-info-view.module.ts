import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RoutesInfoModule } from '../routes-info';

import { RoutesInfoViewComponent } from './routes-info-view.component';
import { ROUTES_INFO_ROUTES } from './routes-info-view.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_INFO_ROUTES),
    RoutesInfoModule,
  ],
  declarations: [RoutesInfoViewComponent],
})
export class RoutesInfoViewModule {}
