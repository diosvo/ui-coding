import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { gsap } from 'gsap'
import { Configs } from 'src/app/configs/api';

import { AnimatedCounterModel } from 'src/app/models/animated-counter-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {
  animatedCardList: AnimatedCounterModel[] = Configs.animatedCardList

  @ViewChild('el', { static: false }) el: ElementRef<HTMLDivElement>

  constructor() { }

  ngAfterViewInit(): void {
    gsap.from(this.el.nativeElement.children, {
      delay: 1,
      autoAlpha: 0,
      y: -20,
      stagger: 0.10
    })
  }

}
