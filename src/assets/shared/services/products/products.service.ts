import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  all$ = new Observable();

  constructor(private http: HttpClient) { }

  all(): Observable<Array<IProduct>> {
    return this.http
      .get<Array<IProduct>>('/assets/shared/data/products.json');
  }
}

/***
@description another way to call observable in service
- service:
  all$ = this.http.get<Array<IProduct>>('/assets/shared/data/products.json')
- component: just need to call all$ via service
*/