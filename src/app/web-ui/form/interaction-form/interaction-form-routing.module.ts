import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './components/order-form/order-form.component';

const routes: Routes = [
  {
    path: '',
    component: OrderFormComponent,
    data: { title: 'Order Form Features' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionFormRoutingModule { }
