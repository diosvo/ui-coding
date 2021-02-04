import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.scss']
})
export class ToggleModeComponent {
  isDarkTheme: boolean = true;

  constructor() { }

  switchTheme() {
    this.isDarkTheme = !this.isDarkTheme
  }
}
