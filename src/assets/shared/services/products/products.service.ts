import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

import { IProduct } from '../../models/product';
import { CategoryService } from '../category/category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /***
   @description create an action steam
   */

  // Invalidates the cache and refreshes the data from the backend server
  // The generic parameter is void because it does not care what the value is, only that an item is emitted.

  private refresh = new ReplaySubject<void>(1);

  // Retains the currently selected product Id
  // Uses 0 for no selected product (couldn't use null because it is used as a route parameter)

  private productSelectedAction = new ReplaySubject<number>(1); // number: productId emit to the stream
  productSelectedAction$ = this.productSelectedAction.asObservable();

  /*** return an observable from the service
   @api products.json
   */

  all$ = this.http.get<Array<IProduct>>('/assets/shared/data/products.json')
    .pipe(
      shareReplay(),
      catchError((_) => of(null))
    );

  withCategory$ =
    combineLatest([this.all$, this.categoryService.all$]) // [ Array<IProduct>, Array<ICategory> ]
      .pipe(
        map(([products, categories]) => {
          return products.map(
            product => ({
              ...product,
              categoryName: categories.find(category => product.categoryId === category.categoryId).categoryName
            }) as IProduct);
        }),
        shareReplay()
      );

  selected$ =
    combineLatest([this.productSelectedAction$, this.withCategory$])
      .pipe(
        map(([selectedProductId, products]) => {
          products.find(product => product.productId === selectedProductId);
        }),
        shareReplay({ bufferSize: 1, refCount: false })
      );

  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) { }

  /*** call methods from the service
   @api products.json
   */

  all(): Observable<Array<IProduct>> {
    return this.http
      .get<Array<IProduct>>('/assets/shared/data/products.json');
  }

  selectedProduct(productId?: number): void {
    this.productSelectedAction.next(productId);
  }

  private byId(productId: number): Observable<IProduct> {
    return this.all$
      .pipe(
        map(products => products.find(row => row.productId === productId)),
      );
  }

  // Refresh the data.
  refreshData(): void {
    this.start();
  }

  start(): void {
    // Start the related services
    this.categoryService.start();
    this.refresh.next();
  }
}
