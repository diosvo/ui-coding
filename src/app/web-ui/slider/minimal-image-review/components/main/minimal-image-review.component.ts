import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from '../../models/data.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-minimal-image-review',
  templateUrl: './minimal-image-review.component.html',
  styleUrls: ['./minimal-image-review.component.scss']
})
export class MinimalImageReviewComponent implements OnInit {
  data$: Observable<Array<IData>>;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.data$ = this.service.all();
  }
}
