import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BackButtonModule } from 'src/assets/shared/components/back-button/back-button.module';
import { ExpandableFloatingMenuRoutingModule } from './expandable-floating-menu-routing.module';
import { ExpandableFloatingMenuComponent } from './expandable-floating-menu.component';

@NgModule({
  declarations: [ExpandableFloatingMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    BackButtonModule,
    ExpandableFloatingMenuRoutingModule
  ]
})
export class ExpandableFloatingMenuModule { }
