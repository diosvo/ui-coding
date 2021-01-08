import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteRoutingModule } from './auto-complete-routing.module';
// import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AutoCompleteComponent } from './auto-complete.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [AutoCompleteComponent],
  imports: [
    CommonModule,
    AutoCompleteRoutingModule,
    AutocompleteLibModule
  ]
})
export class AutoCompleteModule { }
