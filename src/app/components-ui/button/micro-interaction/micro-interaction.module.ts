import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackButtonModule } from 'src/assets/shared/components/back-button/back-button.module';
import { MicroInteractionRoutingModule } from './micro-interaction-routing.module';
import { MicroInteractionComponent } from './micro-interaction.component';

@NgModule({
  declarations: [MicroInteractionComponent],
  imports: [
    CommonModule,
    MicroInteractionRoutingModule,
    BackButtonModule
  ]
})
export class MicroInteractionModule { }
