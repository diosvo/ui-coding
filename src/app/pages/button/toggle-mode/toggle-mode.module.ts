import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ToggleModeRoutingModule } from './toggle-mode-routing.module';

import { ToggleModeComponent } from './toggle-mode.component';

@NgModule({
  declarations: [ToggleModeComponent],
  imports: [
    CommonModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ToggleModeRoutingModule
  ]
})
export class ToggleModeModule { }
