import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleMoodRoutingModule } from './toggle-mood-routing.module';
import { ToggleMoodComponent } from './toggle-mood.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ToggleMoodComponent],
  imports: [
    CommonModule,
    ToggleMoodRoutingModule,
    SharedModule
  ]
})
export class ToggleMoodModule { }
