import { NgModule, Optional, SkipSelf, inject } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from './material';

@NgModule({
  imports: [
    MaterialModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: () => new TranslateHttpLoader(inject(HttpClient)),
      },
    }),
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      const msg = `CoreModule has already been loaded.
      Import CoreModule only once in the AppModule.`;

      throw new Error(msg);
    }
  }
}
