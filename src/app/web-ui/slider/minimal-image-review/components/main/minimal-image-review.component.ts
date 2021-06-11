import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { IData } from '../../models/data.interface';
import { ImageReviewService } from '../../services/image-review.service';
import { ReviewListComponent } from '../review-list/review-list.component';

@Component({
  selector: 'dv-image-review',
  templateUrl: './minimal-image-review.component.html',
  styleUrls: ['./minimal-image-review.component.scss']
})
    // problem: UI does not complete > can not see the last element in lists

export class MinimalImageReviewComponent implements OnInit {
  data$: Observable<Array<IData>>;
  calculatedWidth: string;

  @ViewChild(ReviewListComponent) public reviews: ReviewListComponent;

  constructor(private service: ImageReviewService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.data$ = this.service.all();
  }

  public onCalculatedWidth(width: string): void {
    console.log(width);

    this.calculatedWidth = width;
    this.cdr.detectChanges();
  }

  public next(): void {
    this.reviews.onNext();
  }
}
