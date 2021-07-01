import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataCompositionNgConfRoutingModule } from './data-composition-ng-conf-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';



@NgModule({
  declarations: [
  
    MainPageComponent,
       SidebarComponent,
       ContentComponent
  ],
  imports: [
    CommonModule,
    DataCompositionNgConfRoutingModule
  ]
})
export class DataCompositionNgConfModule { }
