import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicroInteractionComponent } from './micro-interaction.component';

const routes: Routes = [
  {
    path: '', component: MicroInteractionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroInteractionRoutingModule { }
