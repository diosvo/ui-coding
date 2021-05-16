import { Component } from '@angular/core';

export const navList = [
  {
    title: 'Home',
    icon: 'icon-home',
  },
  {
    title: 'Search',
    icon: 'icon-magnifying-glass',
  },
  {
    title: 'Like',
    icon: 'icon-heart-outlined',
  },
  {
    title: 'Profile',
    icon: 'icon-user',
  },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  selected: number
  private sizes = {
    listItemWidth: 0,
    translateX: 0
  }

  public navList = navList;

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
    this.updateSizes(element, i);
  }
}
