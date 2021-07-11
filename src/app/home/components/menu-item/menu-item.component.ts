import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { IGroupValue } from '../../models/search.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() data: Array<IGroupValue>;
  @Output() routerToItem = new EventEmitter();

  emptyImg = 'assets/images/logo/placeholder-image.png';

  constructor(
    private router: Router
  ) { }

  directItem(groupUrl: string, groupName: string, itemRoute: string): void {
    this.router.navigate([groupUrl, groupName.toLowerCase(), itemRoute]);
  }
}
