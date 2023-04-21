import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// module to configure material components globally.
// define material root providers here
@NgModule({
  imports: [MatSnackBarModule],
  providers: [],
})
export class MaterialModule {}
