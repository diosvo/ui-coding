import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

import { combineLatest, of, Subject } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

import { IProduct } from 'src/assets/shared/models/product';
import { ProductsService } from 'src/assets/shared/services/products/products.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'data-composition-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnDestroy {
  messageError: string;
  destroyed = new Subject<void>();

  products$ = this.productsService
    .all$
    .pipe(
      catchError(error => {
        this.messageError = error;
        return of(null);
      })
    );

  pageTitle$ = this.products$
    .pipe(
      map((product: IProduct) => product ? `Product Details for: ${product.productName}` : null)
    );

  combination$ = combineLatest([this.products$, this.pageTitle$])
    .pipe(
      filter(([product]) => !!product),
      map(([product, pageTitle]) => ({ product, pageTitle }))
    );

  constructor(private productsService: ProductsService) { }


  onSelected(productId: number): void {
    this.productsService.changeSelectedProduct(productId);
  }

  ngOnDestroy(): void {
    this.destroyed.next(undefined);
    this.destroyed.complete();
  }
}
