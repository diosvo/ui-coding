import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/auto-complete/auto-complete.module').then(m => m.AutoCompleteModule),
  },
  {
    path: 'all-thing-about',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },  
  {
    path: 'web-app',
    loadChildren: () => import('./web/web.module').then(m => m.WebModule),
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
  },
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
