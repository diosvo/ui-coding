import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AdvancedCrudRoutingModule } from './advanced-crud-routing.module';
import { AdvancedCrudComponent } from './components/advanced-crud/advanced-crud.component';

@NgModule({
  declarations: [
    AdvancedCrudComponent
  ],
  imports: [
    CommonModule,
    AdvancedCrudRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AdvancedCrudModule { }
