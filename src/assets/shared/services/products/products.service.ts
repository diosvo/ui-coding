import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  all$ = this.http
    .get<Array<IProduct>>('/assets/shared/data/products.json')

  constructor(private http: HttpClient) { }
}
