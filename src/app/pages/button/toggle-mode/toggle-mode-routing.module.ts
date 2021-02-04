import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToggleModeComponent } from './toggle-mode.component';

const routes: Routes = [
  {
    path: '', component: ToggleModeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToggleModeRoutingModule { }
