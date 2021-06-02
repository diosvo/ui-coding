import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'minimal-image-reviews',
    loadChildren: () => import('./minimal-image-review/minimal-image-review.module').then(m => m.MinimalImageReviewModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule { }
