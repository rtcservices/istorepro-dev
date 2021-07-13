import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsMisComponent } from './dashboards-mis/dashboards-mis.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [

    DashboardsMisComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    SharedModule
  ]
})
export class DashboardsModule { }
