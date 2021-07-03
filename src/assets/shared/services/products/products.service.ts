import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../../models/product';
import { CategoryService } from '../category/category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /*** return an observable from the service
   @api products.json
   */

  all$ = this.http.get<Array<IProduct>>('/assets/shared/data/products.json');

  productsWithCategory$ =
    combineLatest([this.all$, this.categoryService.all$]) // [ Array<IProduct>, Array<ICategory> ]
      .pipe(
        map(([products, categories]) => {
          products.map(
            product => ({
              ...product,
              category: categories.find(category => product.categoryId === category.categoryId)
            } as IProduct)
          );
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
}
