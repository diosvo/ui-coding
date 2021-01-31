import { Component, OnInit } from '@angular/core';
import { estatePropertyList } from 'src/app/configs/estate/propertyList';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.scss']
})
export class EstateComponent implements OnInit {
  estateMenuList =  estatePropertyList
  constructor() { }

  ngOnInit(): void {
    console.log(this.estateMenuList);
    
  }

}
