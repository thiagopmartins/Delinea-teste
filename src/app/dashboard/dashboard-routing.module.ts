import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.components/dashboard.component';

const routes: Routes = [
  {
      path: '',
      component: DashboardComponent,
      children: [
      {
        path: '',
        redirectTo: './candidatos',
        pathMatch: 'full'
      },
      {
        path: 'candidatos',
        component: DashboardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
