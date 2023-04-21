import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { APP_PAGINATOR_PROVIDER } from './paginator-intl.service';

// module to configure material components globally.
// define material root providers here
@NgModule({
  imports: [MatSnackBarModule],
  providers: [APP_PAGINATOR_PROVIDER],
})
export class MaterialModule {}
