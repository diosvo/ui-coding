import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EWebUI } from '../home/models/url.enum';

const routes: Routes = [
  {
    path: EWebUI.SLIDER,
    loadChildren: () => import('./slider/slider.module').then(m => m.SliderModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebUiRoutingModule { }