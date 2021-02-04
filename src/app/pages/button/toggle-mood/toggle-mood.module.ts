import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToggleMoodRoutingModule } from './toggle-mood-routing.module';
import { ToggleMoodComponent } from './toggle-mood.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ToggleMoodComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ToggleMoodRoutingModule,
  ]
})
export class ToggleMoodModule { }
