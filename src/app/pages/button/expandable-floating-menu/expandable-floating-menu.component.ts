import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { gsap, Expo } from 'gsap'

import { MenuModel } from 'src/app/models/expandable-floating-menu';
import { menuDataList, MenuPosition } from '../../../configs/expandable-floating-menu/menuData'

@Component({
  selector: 'app-expandable-floating-menu',
  templateUrl: './expandable-floating-menu.component.html',
  styleUrls: ['./expandable-floating-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExpandableFloatingMenuComponent implements OnInit {
  @Input() menuData = menuDataList
  @Input() menuPosition: MenuPosition = 'bottomRight';
  @Input() disabled: boolean;

  @Output() menuSelect = new EventEmitter<MenuModel>();

  @ViewChild('menu', { static: true }) menu: ElementRef

  constructor() { }

  ngOnInit(): void {
    this.setMenuPosition()
  }

  showMenu(menu: HTMLDivElement, btn: HTMLButtonElement, overlay: HTMLDivElement) {
    gsap.to(overlay, {
      duration: 0,
      autoAlpha: 1
    })

    gsap.to(btn, {
      x: this.translatePosition.positionX,
      y: this.translatePosition.positionY,

      duration: 0.3,
      autoAlpha: 0,

      scale: 1.6,
      ease: Expo.easeInOut as any
    })

    gsap.to(menu, {
      x: -10,
      y: -10,

      width: 200,
      height: 'auto',

      scale: 1,
      duration: 0.4,

      autoAlpha: 1,
      ease: Expo.easeInOut as any
    })

    gsap.from(menu.children, {
      delay: 0.1,
      autoAlpha: 0,
      ease: Expo.easeInOut as any
    })
  }

  setStyles() {
    return {
      opacity: this.disabled ? 0.3 : 1,
      cursor: this.disabled ? 'default' : 'pointer'
    }
  }

  setMenuPosition() {
    const menu = this.menu.nativeElement as HTMLDivElement

    switch (this.menuPosition) {
      case 'topLeft':
        menu.style.top = '10%';
        menu.style.left = '25%';
        return;
      case 'bottomLeft':
        menu.style.left = '25%';
        return;
      case 'topRight':
        menu.style.top = '10%';
        menu.style.right = '0';
        return;
      case 'bottomRight':
        menu.style.right = '0';
        return;
      default:
        return;
    }
  }

  get translatePosition(): { positionX: number, positionY: number } {
    switch (this.menuPosition) {
      case 'topLeft':
        return { positionX: -20, positionY: -20 }
      case 'topRight':
        return { positionX: 10, positionY: -20 }
      case 'bottomLeft':
        return { positionX: -20, positionY: 20 }
      case 'bottomRight':
        return { positionX: 10, positionY: 10 }
      default:
        return
    }
  }

  closeMenu(menu: HTMLDivElement, btn: HTMLButtonElement, overlay: HTMLDivElement) {
    gsap.to(overlay, {
      duration: 0,
      autoAlpha: 0
    })

    gsap.to(btn, {
      x: 0,
      y: 0,

      duration: 0.4,
      autoAlpha: 1,

      scale: 1,
      ease: Expo.easeInOut as any
    })

    gsap.to(menu, {
      x: -10,
      y: -10,
      width: 0,
      height: 0,

      duration: 0.3,
      autoAlpha: 0,

      scale: 0.4,
      ease: Expo.easeInOut as any
    })

    gsap.from(menu.children, {
      duration: 0,
      autoAlpha: 1,
      ease: Expo.easeInOut as any
    })
  }

  selectItem = (menu: MenuModel) => this.menuSelect.emit(menu)
}