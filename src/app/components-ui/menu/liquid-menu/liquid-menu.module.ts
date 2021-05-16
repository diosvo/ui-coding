import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { LiquidMenuRoutingModule } from './liquid-menu-routing.module';

import { LiquidMenuComponent } from './liquid-menu.component';

@NgModule({
  declarations: [LiquidMenuComponent],
  imports: [
    SharedModule,
    LiquidMenuRoutingModule
  ]
})
export class LiquidMenuModule { }
