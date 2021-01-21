import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appMomentumScrolling]'
})
export class MomentumScrollingDirective implements OnInit {

  private data = {
    ease: 0.1,
    curr: 0,
    prev: 0,
    rounded: 0
  }

  private parentNodeStyles = {
    position: 'fixed',
    top: '0',
    left: '0',

    height: '100%',
    width: '100%',

    overflow: 'hidden',
    pointerEvents: 'none'
  } as CSSStyleDeclaration

  constructor(
    private _el: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit() {
    requestAnimationFrame(() => this.smoothScroll())
    this.initScrollStyle();
    this.setBodyHeight();
  }

  private get elementInitialized(): boolean {
    return !!(this._el && this._el.nativeElement)
  }

  private setBodyHeight() {
    const containerMargin = '100px';
    if(this.elementInitialized) {
      this._document.body.style.height = `calc(${
        this._el.nativeElement.getBoundingClientRect().height
      }px + ${containerMargin})`
    }
  }

  private initScrollStyle(): void {
    (this._document.body.style as any).overscrollBehaviorY = 'none';

    if (this.elementInitialized) {
      const appRootStyleObj: CSSStyleDeclaration = (this._el.nativeElement.parentNode as HTMLElement).style

      for(const key in this.parentNodeStyles) {
        // Check key exists in object
        if(Object.prototype.hasOwnProperty.call(appRootStyleObj, key)) {
          appRootStyleObj[key] = this.parentNodeStyles[key]
        }
      }
    }
  }

  private smoothScroll(): void {
    if (this.elementInitialized) {
      this.data.curr = window.scrollY;
      this.data.prev += (this.data.curr - this.data.prev) * this.data.ease;
      this.data.rounded = Math.round(this.data.prev * 100) / 100;

      this._el.nativeElement.style.transform = `translate3d(0, -${this.data.rounded}px, 0)`
      requestAnimationFrame(() => this.smoothScroll())
    }
  }

}
