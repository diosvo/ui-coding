import { ChangeDetectionStrategy, Component } from '@angular/core';

import { combineLatest } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';

import { IProduct } from 'src/assets/shared/models/product';
import { ProductsService } from 'src/assets/shared/services/products/products.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'data-composition-content',
  templateUrl: './content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {
  pageTitle: string;
  errorMessage: string;

  product$ = this.productsService.selected$
    .pipe(
      tap({
        next: (product: IProduct) => this.displayProduct(product)
      }),
      catchError(error => this.errorMessage = error)
    );

  selectedProductId$ = this.productsService.productSelectedAction$;

  combination$ = combineLatest([this.product$, this.selectedProductId$])
    .pipe(
      filter(([product]) => !!product),
      map(([product, selectedProductId]) => ({ product, selectedProductId }))
    );

  constructor(private productsService: ProductsService) { }

  displayProduct(product: IProduct): void {
    if (product) {
      this.pageTitle = `Product Detail ➡ ${product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
