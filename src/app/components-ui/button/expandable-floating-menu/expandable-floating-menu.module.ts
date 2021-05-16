import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandableFloatingMenuRoutingModule } from './expandable-floating-menu-routing.module';
import { ExpandableFloatingMenuComponent } from './expandable-floating-menu.component';

@NgModule({
  declarations: [ExpandableFloatingMenuComponent],
  imports: [
    CommonModule,
    ExpandableFloatingMenuRoutingModule
  ]
})
export class ExpandableFloatingMenuModule { }
