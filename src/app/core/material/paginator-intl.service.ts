import { ExistingProvider, Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppPaginator extends MatPaginatorIntl {
  constructor(private _translateService: TranslateService) {
    super();
    this.subscribeOnTranslationChange();
  }

  private subscribeOnTranslationChange() {
    combineLatest({
      itemsPerPageLabel: this._translateService.get(
        'paginator.itemsPerPageLabel',
      ),
      nextPageLabel: this._translateService.get('paginator.nextPageLabel'),
      previousPageLabel: this._translateService.get(
        'paginator.previousPageLabel',
      ),
      firstPageLabel: this._translateService.get('paginator.firstPageLabel'),
      lastPageLabel: this._translateService.get('paginator.lastPageLabel'),
    }).subscribe(
      ({
        firstPageLabel,
        itemsPerPageLabel,
        lastPageLabel,
        nextPageLabel,
        previousPageLabel,
      }) => {
        this.firstPageLabel = firstPageLabel;
        this.itemsPerPageLabel = itemsPerPageLabel;
        this.lastPageLabel = lastPageLabel;
        this.nextPageLabel = nextPageLabel;
        this.previousPageLabel = previousPageLabel;

        this.changes.next();
      },
    );
  }
}
export const APP_PAGINATOR_PROVIDER: ExistingProvider = {
  provide: MatPaginatorIntl,
  useExisting: AppPaginator,
};
