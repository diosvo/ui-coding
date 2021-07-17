import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenu } from '../../models/search.model';
import { EUrl } from '../../models/url.enum';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  @Input() list: Array<IMenu>;
  @Output() directLink = new EventEmitter<EUrl>();
}
