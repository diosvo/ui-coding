import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { ICategory } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private refresh = new ReplaySubject<void>();

  /*** return an observable from the service
   @api category.json
   */

  // Using refresh here instead of reassigning the value ensures that no references are lost.

  all$: Observable<Array<ICategory>> =
    this.refresh.pipe(
      mergeMap(() => this.http.get<Array<ICategory>>('/assets/shared/data/category.json')),
      catchError((_) => of(null))
    );

  constructor(private http: HttpClient) { }

  /*** call methods from the service
   @api category.json
   */

  all(): Observable<Array<ICategory>> {
    return this.http
      .get<Array<ICategory>>('/assets/shared/data/category.json');
  }

  // Refresh the data.

  refreshData(): void {
    this.refresh.next();
  }

  start(): void {
    this.refreshData();
  }
}
