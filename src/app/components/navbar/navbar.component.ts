import { Component, OnInit } from '@angular/core';
import { Configs } from 'src/app/configs/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selected: number
  private sizes = {
    listItemWidth: 0,
    translateX: 0
  }

  public navList = Configs.navList

  constructor() { }

  ngOnInit(): void {
  }

  get animate() {
    return {
      width: this.sizes.listItemWidth + 'px',
      transform: `translateX(${this.sizes.translateX}px)`
    }
  }

  updateSizes(element: HTMLElement, index = 1) {
    this.sizes = {
      listItemWidth: element.getBoundingClientRect().width,
      translateX: element.getBoundingClientRect().width * index
    }
  }

  onSelect(element: HTMLElement, i) {
    this.selected = i;
    this.updateSizes(element, i)
  }
}
