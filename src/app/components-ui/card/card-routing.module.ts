import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatedCounterComponent } from './animated-counter/animated-counter.component';

const routes: Routes = [
  {
    path: 'animated-counter',
    loadChildren: () => import('./animated-counter/animated-counter.module').then(m => m.AnimatedCounterModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
