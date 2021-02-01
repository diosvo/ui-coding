import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstateRoutingModule } from './estate-routing.module';

import { EstateComponent } from './estate.component';
import { DetailComponent } from './detail/detail.component';
import { ListingsComponent } from './listings/listings.component';

@NgModule({
  declarations: [EstateComponent, DetailComponent, ListingsComponent],
  imports: [
    CommonModule,
    EstateRoutingModule
  ]
})
export class EstateModule { }
