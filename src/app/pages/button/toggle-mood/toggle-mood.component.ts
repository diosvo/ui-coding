import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toggle-mood',
  templateUrl: './toggle-mood.component.html',
  styleUrls: ['./toggle-mood.component.scss']
})
export class ToggleMoodComponent implements OnInit {
  theme: Theme = 'light-theme'
  constructor(@Inject(DOCUMENT) private _document: Document,
    private _renderer: Renderer2) { }

  ngOnInit(): void {
    this.initializeTheme()
  }

  initializeTheme = (): void => 
  this._renderer.addClass(this._document.body, this.theme)
}

export type Theme = 'light-theme' | 'dark-theme';
