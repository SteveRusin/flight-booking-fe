import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageLayoutComponent } from './page-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PageLayoutComponent],
})
export class PageLayoutModule {}
