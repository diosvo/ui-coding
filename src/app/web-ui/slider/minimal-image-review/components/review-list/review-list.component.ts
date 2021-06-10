import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Expo, gsap } from 'gsap';

import { IData } from '../../models/data.interface';
import { Sizes } from '../../models/size.interface';

@Component({
  selector: 'dv-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit, AfterViewInit {

  @ViewChild('list', { static: true }) list: ElementRef<HTMLDivElement>;
  @Input() data: Array<IData> = Array<IData>();
  @Output() calculatedWidth = new EventEmitter<string>();

  numberOfElementsShown = 4;
  currentIndex = 0;

  constructor(
    private hostElement: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.elementsToDisplay(this.numberOfElementsShown);
    this.initializeElements();
  }

  onNext(): void {

  }


  /***
  * @description initialize elements (animation) to display
  */

  public elementsToDisplay(elementCount: number): void {
    const calculatedWidth = `${(this.sizes.listItemWidth + this.sizes.listItemMargin) * elementCount
      }px`;
    this.calculatedWidth.emit(calculatedWidth);

    this.hostElement.nativeElement.style.width = calculatedWidth;
  }

  private initializeElements(): void {
    if (!this.activeElement().element) {
      const element = this.elementList[this.data.length - 1] as HTMLElement;
      const translateValue = `-${(this.sizes.listItemWidth + this.sizes.listItemMargin) *
        (this.data.length - this.numberOfElementsShown)
        }px`;
      element.classList.add('element-active');

      this.elementList.forEach((el) =>
        gsap.to(el, { duration: 0, translateX: translateValue })
      );
      this.animateSelectedElement(this.data.length - 1);
    }
  }

  private animateSelectedElement(index: number): void {
    gsap.to(this.elementList[index], {
      height: this.sizes.animationHeight,
      duration: 1,
      ease: Expo.easeInOut as any,
      translateY: `-${this.sizes.animationHeight -
        (this.sizes.listItemWidth + this.sizes.listItemHeight)
        }px`
    });
  }

  private removeSelectedAnimation(): void {
    gsap.to(this.activeElement().element, {
      height: this.sizes.listItemHeight,
      duration: 2,
      ease: Expo.easeInOut as any,
      translateY: 0
    });
  }

  /***
  * @description cast the HTMlCollection into an Array of HTMLElement
  */

  private get elementList(): HTMLElement[] {
    if (this.listExits) {
      return Array.prototype.slice.call(this.list.nativeElement.children);
    }
  }

  private get listExits(): boolean {
    return (
      this.list &&
      this.list.nativeElement &&
      this.list.nativeElement.childNodes &&
      this.list.nativeElement.childNodes.length > 0
    );
  }

  private activeElement(): {
    element: HTMLElement; elementIndex: number;
  } {
    let obj = {
      element: null,
      elementIndex: null
    };

    this.elementList.forEach((node, index) => {
      if (node && node.classList && node.classList.contains('element-active')) {
        obj = {
          ...obj,
          element: node,
          elementIndex: index
        };
      }
    });
    return obj;
  }

  private get sizes(): Sizes {
    let sizes = {} as Sizes;
    if (this.listExits) {
      const dataList = this.list.nativeElement;
      sizes = {
        containerWidth: dataList.getBoundingClientRect().width,
        containerHeight: dataList.getBoundingClientRect().height,
        listItemWidth:
          (dataList.childNodes[0] as HTMLDivElement).classList &&
          (dataList.childNodes[0] as HTMLDivElement).getBoundingClientRect().width,
        listItemHeight:
          (dataList.childNodes[0] as HTMLDivElement).classList &&
          (dataList.childNodes[0] as HTMLDivElement).getBoundingClientRect().height,
        listItemMargin: 2.5,
        animationHeight: 700
      };
    }

    return sizes;
  }
}
