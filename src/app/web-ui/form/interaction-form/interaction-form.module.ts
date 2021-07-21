import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionFormRoutingModule } from './interaction-form-routing.module';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    OrderFormComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    InteractionFormRoutingModule
  ]
})
export class InteractionFormModule { }
