import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { IGroupValue } from '../models/search.model';
import { EUrl } from '../models/url.enum';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) { }

  getSession(session: EUrl): Observable<Array<IGroupValue>> {
    return this.http
      .get<Array<IGroupValue>>(`/assets/searching-data/${session}.json`)
      .pipe(
        shareReplay(1),
        catchError(_ => of(null))
      );
  }

  onFilter(session: EUrl, query: string): Observable<Array<IGroupValue>> {
    return this.getSession(session)
      .pipe(
        map((items: Array<IGroupValue>) => items.map(
          (item: IGroupValue) => ({
            groupName: item.groupName,
            groupDetails: item.groupDetails.filter(
              details => details.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
            ),
            groupUrl: session
          })
        )),
        shareReplay(1),
        catchError(_ => of(null))
      );
  }
}
