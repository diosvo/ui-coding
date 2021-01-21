import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomentumScrollingRoutingModule } from './momentum-scrolling-routing.module';
import { MomentumScrollingComponent } from './momentum-scrolling.component';


@NgModule({
  declarations: [MomentumScrollingComponent],
  imports: [
    CommonModule,
    MomentumScrollingRoutingModule
  ]
})
export class MomentumScrollingModule { }
