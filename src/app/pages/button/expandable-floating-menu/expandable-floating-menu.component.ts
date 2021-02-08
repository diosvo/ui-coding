import { Component, OnInit } from '@angular/core';
import { menuDataList } from '../../../configs/expandable-floating-menu/menu-data'

@Component({
  selector: 'app-expandable-floating-menu',
  templateUrl: './expandable-floating-menu.component.html',
  styleUrls: ['./expandable-floating-menu.component.scss']
})
export class ExpandableFloatingMenuComponent implements OnInit {
  menuData = menuDataList
  constructor() { }

  ngOnInit(): void {
    console.log(this.menuData);
    
  }

}
