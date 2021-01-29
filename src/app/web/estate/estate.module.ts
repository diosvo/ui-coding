import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstateRoutingModule } from './estate-routing.module';
import { EstateComponent } from './estate.component';


@NgModule({
  declarations: [EstateComponent],
  imports: [
    CommonModule,
    EstateRoutingModule
  ]
})
export class EstateModule { }
