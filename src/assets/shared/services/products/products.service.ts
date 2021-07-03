import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { combineLatest, Observable, of, Subject } from 'rxjs';
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

  private productSelectedAction = new Subject<number>(); // number: productId emit to the stream
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
        })
      );

  selected$ =
    combineLatest([this.productSelectedAction$, this.withCategory$])
      .pipe(
        map(([selectedProductId, products]) => {
          products.find(product => product.productId === selectedProductId);
        })
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

  changeSelectedProduct(productId?: number): void {
    this.productSelectedAction.next(productId);
  }
}
