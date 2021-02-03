import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstateComponent } from './estate.component';
import { DetailComponent } from './detail/detail.component';
import { ListingsComponent } from './listings/listings.component';

const routes: Routes = [
  {
    path: '',
    component: EstateComponent
  },
  {
    path: 'listings',
    component: ListingsComponent,
    outlet: 'l'
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    outlet: 'd'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstateRoutingModule { }
