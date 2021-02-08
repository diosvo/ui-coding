import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpandableFloatingMenuComponent } from './expandable-floating-menu.component';

const routes: Routes = [
  {
    path: '', component: ExpandableFloatingMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpandableFloatingMenuRoutingModule { }
