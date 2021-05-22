import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

import { ComponentUI } from '../../models/data';
import { IGroupValue } from '../../models/search.model';
import { EComponentUI, EUrl } from '../../models/url.enum';

// tslint:disable-next-line: variable-name
export const _filter = (opt: string[], value: string): any[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {
  compForm: FormGroup = this.formBuilder.group({
    compGroup: '',
  });
  compData: Array<IGroupValue> = ComponentUI;
  compNameOptions: Observable<IGroupValue[]>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.compNameOptions = this.compForm.get('compGroup')?.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value)),
        debounceTime(500)
      );
  }

  private _filterGroup(value: string): Array<IGroupValue> {
    if (value) {
      return this.compData
        .map(group => ({
          groupName: group.groupName,
          groupDetails: _filter(group.groupDetails.map(detail => detail.name), value)
        }))
        .filter(group => group.groupDetails.length > 0);
      // issues! find result ok but can not response correctly data type => can not show filtered result
    }
    return this.compData;
  }

  optionSelected(event: MatOptionSelectionChange): void {
    switch (event.source.group.label.toLowerCase()) {
      case EComponentUI.BUTTON:
        this.router.navigate([EUrl.COMPONENT, EComponentUI.BUTTON, event.source.value]);
    }
  }
}
