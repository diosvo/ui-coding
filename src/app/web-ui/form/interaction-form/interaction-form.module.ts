import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionFormRoutingModule } from './interaction-form-routing.module';
import { OrderFormComponent } from './components/order-form/order-form.component';


@NgModule({
  declarations: [
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    InteractionFormRoutingModule
  ]
})
export class InteractionFormModule { }
