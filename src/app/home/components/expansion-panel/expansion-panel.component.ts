import { Component, Input, OnInit } from '@angular/core';
import { IPanel } from '../../models/search.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  @Input() panel: IPanel;

  constructor() { }

  ngOnInit(): void { }
}
