import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'component-ui',
    loadChildren: () => import('./components-ui/components-ui.module').then(m => m.ComponentsUiModule)
  },
  {
    path: 'web-ui',
    loadChildren: () => import('./web-ui/web-ui.module').then(m => m.WebUiModule)
  },
  {
    path: 'function',
    loadChildren: () => import('./functions/functions.module').then(m => m.FunctionsModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
