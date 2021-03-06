import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EUrl } from './home/models/url.enum';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: EUrl.COMPONENT,
    loadChildren: () => import('./components-ui/components-ui.module').then(m => m.ComponentsUiModule)
  },
  {
    path: EUrl.WEB,
    loadChildren: () => import('./web-ui/web-ui.module').then(m => m.WebUiModule)
  },
  {
    path: EUrl.FUNCTION,
    loadChildren: () => import('./functions/functions.module').then(m => m.FunctionsModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
