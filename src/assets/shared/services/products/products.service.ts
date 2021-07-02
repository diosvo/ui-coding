import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /*** return an observable from the service
  @api products.json
  */

  all$ = this.http.get<Array<IProduct>>('/assets/shared/data/products.json');

  constructor(private http: HttpClient) { }

  /*** call methods from the service
  @api products.json
  */

  all(): Observable<Array<IProduct>> {
    return this.http
      .get<Array<IProduct>>('/assets/shared/data/products.json');
  }
}
