import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselRoutingModule } from './carousel-routing.module';

import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    SharedModule,
    CarouselRoutingModule
  ]
})
export class CarouselModule { }
