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

  /**
   * @description return an observable from the service
   * @api category.json
   * @tips refreshes the data from the backend server
   */

  // Using refresh here instead of reassigning the value ensures that no references are lost.

  all$: Observable<Array<ICategory>> =
    this.refresh.pipe(
      mergeMap(() => this.http.get<Array<ICategory>>('/assets/shared/data/category.json')),
      catchError((_) => of(null))
    );

  constructor(private http: HttpClient) { }

  /**
   * @description call methods from the service
   * @api category.json
   * @tips uses methods without refreshing
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
