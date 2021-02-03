import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'micro-interaction',
    loadChildren: () => import('./micro-interaction/micro-interaction.module').then(m => m.MicroInteractionModule),
  },
  {
    path: 'toggle-mood',
    loadChildren: () => import('./toggle-mood/toggle-mood.module').then(m => m.ToggleMoodModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRoutingModule { }
