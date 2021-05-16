import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicroInteractionComponent } from './micro-interaction.component';

const routes: Routes = [
  {
    path: '',
    component: MicroInteractionComponent,
    data: { title: 'Button Micro Interaction' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroInteractionRoutingModule { }
