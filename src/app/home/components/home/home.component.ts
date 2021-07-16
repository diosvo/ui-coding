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
            if (item.route === route) {
              item.active = true;
              this.panel.subTitle = item.description;
            } else {
              item.active = false;
            }
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
