import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlertModule } from 'src/assets/shared/components/alert/alert.module';
import { HomeComponent } from './components/home/home.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    MenuItemComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AlertModule,
    FormsModule,

    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
})
export class HomeModule { }
