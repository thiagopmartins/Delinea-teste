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
        redirectTo: './empresa',
        pathMatch: 'full'
      },
      {
        path: 'empresa',
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
