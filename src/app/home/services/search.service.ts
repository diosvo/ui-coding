import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { IGroupValue } from '../models/search.model';
import { EUrl } from '../models/url.enum';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  result$ = new Subject<Array<IGroupValue>>();

  constructor(private http: HttpClient) { }

  // deprecate -> create new module: search
  searchComp(q: string): Observable<Array<IGroupValue>> {
    return this.http
      .get<Array<IGroupValue>>('/assets/searching-data/components.json')
      .pipe(
        map(items =>
          items.filter(
            item => item.groupName.toLowerCase().indexOf(q.toLowerCase()) !== -1))
      );
  }

  getSession(session: string): Observable<Array<IGroupValue>> {
    return this.http
      .get<Array<IGroupValue>>(`/assets/searching-data/${session}.json`)
      .pipe(
        shareReplay(1),
        catchError((_) => of(null))
      );
  }

  combineSession(): Observable<any> {
    return combineLatest([this.getSession(EUrl.COMPONENT), this.getSession(EUrl.WEB), this.getSession(EUrl.FUNCTION)])
      .pipe(
        map(([components, web, functions]) => ({ components, web, functions })),
        shareReplay(),
        catchError((_) => of(null))
      );
  }
}

/*.pipe(
        map(items =>
          items.map(item => item.groupDetails.filter(details =>
            details.name.toLowerCase().indexOf(q.toLowerCase()) !== -1) as any)
      ));
 */
