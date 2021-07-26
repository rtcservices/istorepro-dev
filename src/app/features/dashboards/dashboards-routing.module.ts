import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardsMisComponent } from './dashboards-mis/dashboards-mis.component';
import { DashboardsHeatmapComponent } from './dashboards-heatmap/dashboards-heatmap.component';

const routes: Routes = [
  { path: 'mis', component: DashboardsMisComponent },
  { path: 'heat-map', component: DashboardsHeatmapComponent },
  { path: '', redirectTo: 'mis', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
