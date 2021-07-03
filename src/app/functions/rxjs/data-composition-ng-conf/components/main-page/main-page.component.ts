import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductsService } from 'src/assets/shared/services/products/products.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'data-composition-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, OnDestroy {
  products$ = new Observable();
  destroyed = new Subject<void>();

  messageError: string;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService
      .productsWithCategory$
      .pipe(
        catchError(error => {
          this.messageError = error;
          return of(null);
        })
      );
  }

  ngOnDestroy(): void {
    this.destroyed.next(undefined);
    this.destroyed.complete();
  }
}
