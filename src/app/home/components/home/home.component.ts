import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil, tap } from 'rxjs/operators';
import { IGroupValue, IMenu, IPanel } from '../../models/search.model';
import { EMenuLink, EUrl } from '../../models/url.enum';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  loading = false;
  errorMessage: string;
  emptySearch: string;

  panel = new IPanel();
  currentUrl: EUrl;

  search$ = new Subject<{ filteredKey: string }>();
  filteredKey: string;
  filteredData: Array<IGroupValue>;

  menuList: Array<IMenu> = [
    {
      name: EMenuLink.COMPONENT,
      route: EUrl.COMPONENT,
      active: false,
      description: 'Used to represent distinct UI elements.'
    },
    {
      name: EMenuLink.WEB,
      route: EUrl.WEB,
      active: false,
      description: 'Minimal Website.'
    },
    {
      name: EMenuLink.FUNCTION,
      route: EUrl.FUNCTION,
      active: false,
      description: 'Better performance with functions.'
    }
  ];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private service: SearchService
  ) { }

  ngOnInit(): void {
    this.filteredKey = '';
    this.directMenuLink(EUrl.COMPONENT);
  }

  directMenuLink(route: EUrl): void {
    this.getData(route);
    this.getFilteredData(this.search$).subscribe({
      next: (result: Array<IGroupValue>) => this.filteredData = result
    });
  }

  getData(route: EUrl): void {
    this.service.getSession(route)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (result: Array<IGroupValue>) => {
          this.loading = false;
          this.filteredData = result;
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'An error ocurred. Please try again!';
        },
        complete: () => {
          this.menuList.map(item => {
            if (item.route === route) {
              item.active = true;
              this.currentUrl = item.route;
              this.panel.subTitle = item.description;
            } else {
              item.active = false;
            }
          });
        }
      });
  }

  getFilteredData(input: Observable<{ filteredKey: string }>): Observable<Array<IGroupValue>> {
    return input.pipe(
      debounceTime(500),
      distinctUntilChanged(
        (p, q) => p.filteredKey === q.filteredKey
      ),
      switchMap((query) =>
        this.service
          .onFilter(this.currentUrl, query.filteredKey.trim())
          .pipe(
            takeUntil(this.destroyed$),
            tap({
              next: (data: Array<IGroupValue>) => {
                this.emptySearch = data.length === 0 ? 'No results found.' : null;
              }
            })
          )
      )
    );
  }

  onFilterKeyChanged(key: string): void {
    this.filteredKey = key;
    this.search$.next({ filteredKey: this.filteredKey });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
