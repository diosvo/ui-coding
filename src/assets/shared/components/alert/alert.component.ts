import { Component, Input } from '@angular/core';
import { EAlert } from '../../models/alert';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'alert-message',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  @Input() type: EAlert;

  public dismissAlert(element): void {
    return element.parentElement.removeChild(element);
  }
}
