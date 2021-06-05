import { Component, Input, OnInit } from '@angular/core';
import { IData } from '../../models/data.interface';

@Component({
  selector: 'dv-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  @Input() data: Array<IData> = Array<IData>();

  constructor() { }

  ngOnInit(): void {
  }
}
