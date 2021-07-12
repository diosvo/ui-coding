import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackButtonModule } from 'src/assets/shared/components/back-button/back-button.module';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    BackButtonModule
  ],
  exports: [RouterModule]
})
export class NavbarModule { }
