import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquidMenuComponent } from './liquid-menu.component';

const routes: Routes = [
  { path: '', component: LiquidMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidMenuRoutingModule { }
