import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AnimatedCounterDirective } from 'src/app/directives/animated-counter.directive';

import { CardComponent } from './card.component';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  declarations: [CardComponent, AnimatedCounterDirective],
  imports: [
    CommonModule,
    SharedModule,
    CardRoutingModule,
  ]
})
export class CardModule { }
