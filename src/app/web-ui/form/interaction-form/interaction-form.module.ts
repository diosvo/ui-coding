import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { InteractionFormRoutingModule } from './interaction-form-routing.module';


@NgModule({
  declarations: [
    OrderFormComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    InteractionFormRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', floatLabel: 'never' } }
  ]
})
export class InteractionFormModule { }
