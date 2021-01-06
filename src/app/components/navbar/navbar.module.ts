import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class NavbarModule { }
