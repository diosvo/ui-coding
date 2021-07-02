import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICoffee } from '../../models/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  /*** return an observable from the service
  @api coffee.json
  */

  all$ = this.http.get<Array<ICoffee>>('/assets/shared/data/coffee.json');

  constructor(private http: HttpClient) { }

  /*** call methods from service
  @api coffee.json
  */

  all(): Observable<Array<ICoffee>> {
    return this.http
      .get<Array<ICoffee>>('/assets/shared/data/coffee.json');
  }
}
