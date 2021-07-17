import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IPanel } from '../../models/search.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  @Input() panel: IPanel;
  @Output() changeSearch = new EventEmitter();
  search = new Subject<string>();

  constructor() { }

  async onNext($event: string): Promise<void> {
    await this.changeSearch.emit($event);
  }
}
