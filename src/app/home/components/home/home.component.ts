import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { IGroupValue, IMenu, IPanel } from '../../models/search.model';
import { EMenuLink, EUrl } from '../../models/url.enum';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loading = true;
  errorMessage: string;
  emptySearch: string;
  currentRoute: EUrl;

  panel = new IPanel();

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
  dataList: Observable<Array<IGroupValue>>;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private service: SearchService
  ) { }

  ngOnInit(): void {
    this.directMenuLink(EUrl.COMPONENT);
  }

  directMenuLink(route: EUrl): void {
    this.dataList = this.service.getSession(route)
      .pipe(
        takeUntil(this.destroyed$),
        tap({
          next: (data: Array<IGroupValue>) => {
            data.map(item => ({ ...item, groupUrl: route }));
            this.loading = false;
          },
          error: () => {
            this.loading = false;
            this.errorMessage = 'Oops...Something went wrong. Please try again!';
          },
          complete: () => {
            this.menuList.map(item => {
              if (item.route === route) {
                item.active = true;
                this.currentRoute = item.route;
                this.panel.subTitle = item.description;
              } else {
                item.active = false;
              }
            });
          }
        }),
      );
  }

  onSearch(query: string): void {
    this.dataList = this.service.onFilter(this.currentRoute, query)
      .pipe(
        takeUntil(this.destroyed$),
        tap({
          next: (data: Array<IGroupValue>) => {
            data.map(group => {
              this.emptySearch = group.groupDetails.length === 0 ? 'No results found.' : null;
            });
          }
        })
      );
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
