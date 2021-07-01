import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductsService } from 'src/assets/shared/services/products/products.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'data-composition-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  products$ = new Observable();
  messageError: string;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService
      .all()
      .pipe(
        catchError(error => {
          this.messageError = error;
          return of(null);
        })
      );
  }
}
