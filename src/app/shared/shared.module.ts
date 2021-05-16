import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackComponent } from '../components-ui/button/go-back/go-back.component';

@NgModule({
  declarations: [GoBackComponent],
  imports: [
    CommonModule
  ],
  exports: [GoBackComponent],
})
export class SharedModule { }
