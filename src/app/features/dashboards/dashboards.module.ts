import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsMisComponent } from './dashboards-mis/dashboards-mis.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardsHeatmapComponent } from './dashboards-heatmap/dashboards-heatmap.component';
import { DhmCellDialogComponent } from './dashboards-heatmap/dialog/dhm-cell-dialog/dhm-cell-dialog.component';

@NgModule({
  declarations: [
    DashboardsMisComponent,
    DashboardsHeatmapComponent,
    DhmCellDialogComponent
  ],
  imports: [CommonModule, DashboardsRoutingModule, SharedModule]
})
export class DashboardsModule {}
