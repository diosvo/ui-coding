import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-mood',
  templateUrl: './toggle-mood.component.html',
  styleUrls: ['./toggle-mood.component.scss']
})

export class ToggleMoodComponent {
  isDarkTheme: boolean = true;

  constructor() { }

  switchTheme() {
    this.isDarkTheme = !this.isDarkTheme
  }
}