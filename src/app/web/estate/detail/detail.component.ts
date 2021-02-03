import { Component, OnInit } from '@angular/core';
import { estatePropertyModel } from 'src/app/models/estate/estate-property';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  propertyModel: estatePropertyModel

  constructor() { }

  ngOnInit(): void {
  }

}
