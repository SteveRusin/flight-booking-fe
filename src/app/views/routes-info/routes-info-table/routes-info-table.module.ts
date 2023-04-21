import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';

import { SpinnerComponent } from '@shared/spinner';

import { RoutesInfoTableComponent } from './routes-info-table.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    SpinnerComponent,
    MatPaginatorModule,
    TranslateModule,
  ],
  declarations: [RoutesInfoTableComponent],
  exports: [RoutesInfoTableComponent],
})
export class RoutesInfoTableModule {}
