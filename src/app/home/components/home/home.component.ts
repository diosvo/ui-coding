import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil, tap } from 'rxjs/operators';
import { IGroupValue, IMenu, IPanel } from '../../models/search.model';
import { EMenuLink, EUrl } from '../../models/url.enum';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loading = false;
  errorMessage: string;
  emptySearch: string;

  panel = new IPanel();
  search$ = new Subject<string>();
  dataList$: Observable<Array<IGroupValue>>;

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
    this.clearSearch();
    this.directMenuLink(EUrl.COMPONENT);
  }

  directMenuLink(route: EUrl): void {
    this.dataList$ = this.search$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(query =>
          this.service.onFilter(route, query)
            .pipe(
              takeUntil(this.destroyed$),
              tap({
                next: (data: Array<IGroupValue>) => {
                  this.loading = false;
                  this.emptySearch = data.length === 0 ? 'No results found.' : null;
                },
                error: () => {
                  this.loading = false;
                  this.errorMessage = 'Oops... Something went wrong. Please try again!';
                },
                complete: () => {
                  this.menuList.map(item => {
                    if (item.route === route) {
                      item.active = true;
                      this.panel.subTitle = item.description;
                    } else {
                      item.active = false;
                    }
                  });
                }
              })
            )
        )
      );
  }

  clearSearch(): void {
    this.search$.next('');
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
