import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MinimalImageReviewComponent } from './components/main/minimal-image-review.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { MinimalImageReviewRoutingModule } from './minimal-image-review-routing.module';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    MinimalImageReviewComponent,
    ReviewListComponent,
    ReviewDetailsComponent
  ],
  imports: [
    CommonModule,
    MinimalImageReviewRoutingModule
  ],
  providers: [DataService]
})
export class MinimalImageReviewModule { }
