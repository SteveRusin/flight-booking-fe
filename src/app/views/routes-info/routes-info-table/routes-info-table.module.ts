import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { SpinnerComponent } from '@shared/spinner';

import { RoutesInfoTableComponent } from './routes-info-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule, SpinnerComponent],
  declarations: [RoutesInfoTableComponent],
  exports: [RoutesInfoTableComponent],
})
export class RoutesInfoTableModule {}
