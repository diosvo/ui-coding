import { NgModule } from '@angular/core';
import { BackButtonModule } from 'src/assets/shared/components/back-button/back-button.module';
import { LiquidMenuRoutingModule } from './liquid-menu-routing.module';
import { LiquidMenuComponent } from './liquid-menu.component';

@NgModule({
  declarations: [LiquidMenuComponent],
  imports: [
    BackButtonModule,
    LiquidMenuRoutingModule
  ]
})
export class LiquidMenuModule { }
