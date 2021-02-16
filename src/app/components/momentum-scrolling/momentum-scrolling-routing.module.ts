import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentumScrollingComponent } from './momentum-scrolling.component';

const routes: Routes = [
  { path: '', component: MomentumScrollingComponent, data: { title: 'Momentum Scrolling' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MomentumScrollingRoutingModule { }
