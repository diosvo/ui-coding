import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EFunctions, EUrl } from 'src/app/home/models/url.enum';
import { ProductsService } from 'src/assets/shared/services/products/products.service';



@Component({
  // tslint:disable-next-line: component-selector
  selector: 'data-composition-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  messageError: string;

  products$ = this.productsService
    .all$
    .pipe(
      catchError(error => {
        this.messageError = error;
        return of(null);
      })
    );

  selectedProduct = this.productsService.productSelectedAction$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.productsService.selectedProduct(id);
    });
  }

  onRefresh(): void {
    this.productsService.refreshData();
  }

  onSelected(productId: number): void {
    this.router.navigate([`${EUrl.FUNCTION}/${EFunctions.RXJS}/data-composition-ng-conf`, productId]);
  }
}
