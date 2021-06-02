import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinimalImageReviewRoutingModule } from './minimal-image-review-routing.module';
import { MinimalImageReviewComponent } from './minimal-image-review.component';

@NgModule({
  declarations: [
    MinimalImageReviewComponent
  ],
  imports: [
    CommonModule,
    MinimalImageReviewRoutingModule
  ]
})
export class MinimalImageReviewModule { }
