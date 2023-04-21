import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesInfoComponent } from './routes-info.component';
import { RoutesInfoTableModule } from './routes-info-table';

@NgModule({
  imports: [CommonModule, RoutesInfoTableModule],
  declarations: [RoutesInfoComponent],
  exports: [RoutesInfoComponent],
})
export class RoutesInfoModule {}
