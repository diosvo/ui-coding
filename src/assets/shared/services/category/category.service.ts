import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  /*** return an observable from the service
   @api category.json
   */

  all$ = this.http.get<Array<ICategory>>('/assets/shared/data/category.json');

  constructor(private http: HttpClient) { }

  /*** call methods from the service
   @api category.json
   */

  all(): Observable<Array<ICategory>> {
    return this.http
      .get<Array<ICategory>>('/assets/shared/data/category.json');
  }
}
