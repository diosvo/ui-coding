import { Component, Input } from '@angular/core';
import { IGroupValue } from '../../models/search.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search-components',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent {
  @Input() data: Array<IGroupValue>;
}
