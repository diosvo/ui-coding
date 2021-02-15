import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarouselComponent } from './carousel.component';

const routes: Routes = [
  { path: '', component: CarouselComponent, data: { title: 'Dynamic Stacked Carousel Gallery' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselRoutingModule { }
