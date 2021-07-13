import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutinesRoutingModule } from './routines-routing.module';
import { RoutinesInventoryAuditComponent } from './routines-inventory-audit/routines-inventory-audit.component';
import { RoutinesStockAdjustComponent } from './routines-stock-adjust/routines-stock-adjust.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RiAssignOperatorDialogComponent } from './routines-inventory-audit/dialogs/ri-assign-operator-dialog/ri-assign-operator-dialog.component';


@NgModule({
  declarations: [
  
    RoutinesInventoryAuditComponent,
       RoutinesStockAdjustComponent,
       RiAssignOperatorDialogComponent
  ],
  imports: [
    CommonModule,
    RoutinesRoutingModule,
    SharedModule
  ]
})
export class RoutinesModule { }
