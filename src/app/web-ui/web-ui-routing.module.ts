import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EWebUI } from '../home/models/url.enum';

const routes: Routes = [
  {
    path: EWebUI.TABLE,
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebUiRoutingModule { }
