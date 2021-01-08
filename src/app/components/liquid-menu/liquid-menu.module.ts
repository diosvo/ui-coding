import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiquidMenuRoutingModule } from './liquid-menu-routing.module';
import { LiquidMenuComponent } from './liquid-menu.component';


@NgModule({
  declarations: [LiquidMenuComponent],
  imports: [
    CommonModule,
    LiquidMenuRoutingModule
  ]
})
export class LiquidMenuModule { }
