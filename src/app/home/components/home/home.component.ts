import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGroupValue, IMenu } from '../../models/search.model';
import { EUrl } from '../../models/url.enum';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  menuList: Array<IMenu> = [
    {
      name: 'Components',
      route: EUrl.COMPONENT
    },
    {
      name: 'Web',
      route: EUrl.WEB
    },
    {
      name: 'Functions',
      route: EUrl.FUNCTION
    }
  ];
  dataList: Array<IGroupValue>;

  loading = true;
  errorMessage: string;

  constructor(
    private service: SearchService
  ) { }

  ngOnInit(): void {
    this.onDirect(EUrl.COMPONENT);
  }

  onDirect(route: string): void {

    this.sub.add(
      this.service.getSession(route).subscribe({
        next: (data: Array<IGroupValue>) => {
          this.dataList = data;
          this.loading = false;
          // this.router.navigate(['home', route]);
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'An error ocurred. Please try again!';
        },
        // complete: () => this.router.navigate(['home', route])
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
