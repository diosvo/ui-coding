import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { MomentumScrollingRoutingModule } from './momentum-scrolling-routing.module';
import { MomentumScrollingDirective } from 'src/app/directives/momentum-scrolling.directive';

import { MomentumScrollingComponent } from './momentum-scrolling.component';

@NgModule({
  declarations: [MomentumScrollingComponent, MomentumScrollingDirective],
  imports: [
    CommonModule,
    SharedModule,
    MomentumScrollingRoutingModule
  ]
})
export class MomentumScrollingModule { }
