import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import CSSRulePlugin from "gsap/dist/CSSRulePlugin";

@Component({
  selector: 'app-micro-interaction',
  templateUrl: './micro-interaction.component.html',
  styleUrls: ['./micro-interaction.component.scss']
})
export class MicroInteractionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mainFunction()
  }

  mainFunction() {
    gsap.registerPlugin(CSSRulePlugin);  
    
    const tl = gsap.timeline({
      defaults: {
        ease: 'easeOut',
        delay: 1
      }
    })

    const btn = document.querySelector('button')
    const rule = document.querySelector('button::before')

    // Set tl: timeline
    tl.to('.label', {
      opacity: 0,
      height: 0,
      position: 'absolute',
      duration: '.2s'
    })

    tl.to(btn, {
      borderRadius: '50%',
      width: '2.5em',
      height: '2.5em'
    }, '-=.5s')

    tl.to(rule, {
      borderRadius: '50%',
    }) 
  }
}
