import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { AnimatedCounterComponent } from './animated-counter/animated-counter.component';


@NgModule({
  declarations: [
    AnimatedCounterComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
