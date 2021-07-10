import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    CommonModule,
    HomeRoutingModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
})
export class HomeModule { }
