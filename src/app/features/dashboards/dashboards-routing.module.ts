import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardsMisComponent } from './dashboards-mis/dashboards-mis.component';

const routes: Routes = [
  { path: 'mis', component: DashboardsMisComponent },
  { path: '', redirectTo: 'mis', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
