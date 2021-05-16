import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { HomeComponent } from './components/home/home.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { SearchFunctionComponent } from './components/search-function/search-function.component';
import { SearchWebComponent } from './components/search-web/search-web.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponentComponent,
    SearchWebComponent,
    SearchFunctionComponent
  ],
  imports: [
    DropdownModule,
    FormsModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
