import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGroupValue } from '../models/search.model';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  result$ = new Subject<Array<IGroupValue>>();

  constructor(private http: HttpClient) { }

  searchComp(q: string): Observable<Array<IGroupValue>> {
    return this.http
      .get<Array<IGroupValue>>('/assets/searching-data/components.json')
      .pipe(
        map(items =>
          items.filter(
            item => item.groupName.toLowerCase().indexOf(q.toLowerCase()) !== -1))
      );
  }
}

/*.pipe(
        map(items =>
          items.map(item => item.groupDetails.filter(details =>
            details.name.toLowerCase().indexOf(q.toLowerCase()) !== -1) as any)
      ));
 */
