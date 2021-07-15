import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  sub = new Subscription();

  menuList: Array<IMenu> = [
    {
      name: EMenuLink.COMPONENT,
      route: EUrl.COMPONENT,
      active: false,
      description: 'Bla bla bla'
    },
    {
      name: EMenuLink.WEB,
      route: EUrl.WEB,
      active: false,
      description: 'Bla bla bla'
    },
    {
      name: EMenuLink.FUNCTION,
      route: EUrl.FUNCTION,
      active: false,
      description: 'Bla bla bla'
    }
  ];
  dataList: Array<IGroupValue>;

  panel: IPanel;

  constructor(
    private service: SearchService
  ) { }

  ngOnInit(): void {
    this.directMenuLink(EUrl.COMPONENT);
  }

  directMenuLink(route: EUrl): void {
    this.sub.add(
      this.service.getSession(route).subscribe({
        next: (data: Array<IGroupValue>) => {
          this.dataList = data.map(item => ({ ...item, groupUrl: route }));
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'An error ocurred. Please try again!';
        },
        complete: () => {
          this.menuList.map(item => {
            item.active = item.route === route ? true : false;

            if (item.route === route) {
              this.panel = {
                mainTitle: item.route.replace(/-/g, ' '),
                subTitle: item.description
              };
            }
          });
        }
      })
    );
  }

  directItem(event): void {
    console.log(event);

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
