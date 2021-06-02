import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

import { WebUI } from '../../models/data';
import { IGroupValue } from '../../models/search.model';
import { EUrl, EWebUI } from '../../models/url.enum';
import { filterGroup } from '../helpers/filter';

@Component({
  selector: 'app-search-web',
  templateUrl: './search-web.component.html',
  styleUrls: ['./search-web.component.scss']
})
export class SearchWebComponent implements OnInit {
  webUiForm: FormGroup = this.formBuilder.group({
    webGroup: null,
  });
  webData: Array<IGroupValue> = WebUI;
  webNameOptions: Observable<IGroupValue[]>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.webNameOptions = this.webUiForm.get('webGroup')?.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value)),
        debounceTime(500)
      );
  }

  private _filterGroup(value: string): Array<IGroupValue> {
    if (value) {
      return this.webData
        .map(group => ({
          groupName: group.groupName,
          groupDetails: filterGroup(group.groupDetails.map(detail => detail.name), value)
        }))
        .filter(group => group.groupDetails.length > 0);
      // issues! find result ok but can not response correctly data type => can not show filtered result
    }
    return this.webData;
  }

  optionSelected(event: MatOptionSelectionChange): void {
    switch (event.source.group.label.toLowerCase()) {
      case EWebUI.SLIDER:
        this.router.navigate([EUrl.WEB, EWebUI.SLIDER, event.source.value]);
        break;
    }
  }
}
