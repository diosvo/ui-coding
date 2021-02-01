import { Component, OnInit } from '@angular/core';
import { estateMenuList } from 'src/app/configs/estate/menuList';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.scss']
})
export class EstateComponent implements OnInit {
  menuList = estateMenuList

  constructor() { }

  ngOnInit(): void {

  }

}
