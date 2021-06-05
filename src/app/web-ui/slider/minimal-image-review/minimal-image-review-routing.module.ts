import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinimalImageReviewComponent } from './components/main/minimal-image-review.component';

const routes: Routes = [
  {
    path: '',
    component: MinimalImageReviewComponent,
    data: { title: 'Minimal Image Reviews Interaction' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinimalImageReviewRoutingModule { }
