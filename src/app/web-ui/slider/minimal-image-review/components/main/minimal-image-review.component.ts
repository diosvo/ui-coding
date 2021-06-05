import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from '../../models/data.interface';
import { ImageReviewService } from '../../services/image-review.service';

@Component({
  selector: 'dv-image-review',
  templateUrl: './minimal-image-review.component.html',
  styleUrls: ['./minimal-image-review.component.scss']
})
export class MinimalImageReviewComponent implements OnInit {
  data$: Observable<Array<IData>>;

  constructor(private service: ImageReviewService) { }

  ngOnInit(): void {
    this.data$ = this.service.all();
  }
}
