import { Component, Input, OnInit } from '@angular/core';
import { IGroupValue } from '../../models/search.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() data: Array<IGroupValue>;
  constructor() { }

  ngOnInit(): void {
  }

}
