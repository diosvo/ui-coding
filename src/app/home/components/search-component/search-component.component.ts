import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { EComponentUI, EUrl } from '../../models/url.enum';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit, AfterContentInit {
  searchInput = new FormControl();
  compOptions$ = new Subject();

  @ViewChild('search', { static: false }) search: ElementRef;

  constructor(
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.compOptions$ = this.searchService.result$;

    this.searchInput.valueChanges
      .pipe(
        filter(q => !q || q?.length > 2),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(q => this.searchService.searchComp(q))
      )
      .subscribe(response => {
        this.searchService.result$.next(response);
      });
  }

  ngAfterContentInit(): void {
    /***
     * @description another way is autofocus (without *ngIf)
     */
    setTimeout(() => this.search.nativeElement.focus());
  }

  optionSelected(event: MatOptionSelectionChange): void {
    switch (event.source.group.label.toLowerCase()) {
      case EComponentUI.BUTTON:
        this.router.navigate([EUrl.COMPONENT, EComponentUI.BUTTON, event.source.value]);
        break;
      case EComponentUI.CARD:
        this.router.navigate([EUrl.COMPONENT, EComponentUI.CARD, event.source.value]);
        break;
      case EComponentUI.MENU:
        this.router.navigate([EUrl.COMPONENT, EComponentUI.MENU, event.source.value]);
        break;
    }
  }
}
