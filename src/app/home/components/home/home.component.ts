import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGroupValue } from '../../models/search.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  loading: boolean;
  errorMessage: string;

  componentsList: Array<IGroupValue>;
  webList: Array<IGroupValue>;
  functionsList: Array<IGroupValue>;

  constructor(private service: SearchService) { }

  ngOnInit(): void {
    this.loading = true;
    this.errorMessage = 'An error ocurred. Please try again!';

    this.sub.add(
      this.service.combineSession().subscribe({
        next: ({ components, web, functions }) => {
          this.componentsList = components;
          this.webList = web;
          this.functionsList = functions;

          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'An error ocurred. Please try again!';
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
