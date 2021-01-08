import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Configs } from 'src/app/configs/api';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  keyword = 'name';
  data = Configs.listData

  selectEvent(item) {
    return this._router.navigate([`${item.routerLink}`]);
  }

}
