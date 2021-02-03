import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToggleMoodComponent } from './toggle-mood.component';

const routes: Routes = [
  {
    path: '', component: ToggleMoodComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToggleMoodRoutingModule { }
