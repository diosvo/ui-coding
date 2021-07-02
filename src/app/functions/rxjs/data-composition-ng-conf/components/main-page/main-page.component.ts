import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CoffeeService } from 'src/assets/shared/services/coffee/coffee.service';
import { ProductsService } from 'src/assets/shared/services/products/products.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'data-composition-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, OnDestroy {
  productsAndCoffee$ = new Observable();
  destroyed = new Subject<void>();

  messageError: string;

  constructor(
    private productsService: ProductsService,
    private coffeeService: CoffeeService
  ) { }

  ngOnInit(): void {
    this.productsAndCoffee$ =
      combineLatest([this.productsService.all$, this.coffeeService.all$]) // [ Array<IProduct>, Array<ICoffee> ]
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
