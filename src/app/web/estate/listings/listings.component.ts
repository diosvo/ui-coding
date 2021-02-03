import { Component, OnInit } from '@angular/core';
import { estatePropertyList } from 'src/app/configs/estate/propertyList';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  propertyList = estatePropertyList

  constructor() { }

  ngOnInit(): void {
  }

}
