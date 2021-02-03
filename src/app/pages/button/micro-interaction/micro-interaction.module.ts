import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicroInteractionRoutingModule } from './micro-interaction-routing.module';
import { MicroInteractionComponent } from './micro-interaction.component';


@NgModule({
  declarations: [MicroInteractionComponent],
  imports: [
    CommonModule,
    MicroInteractionRoutingModule
  ]
})
export class MicroInteractionModule { }
