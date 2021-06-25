import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutinesInventoryAuditComponent } from './routines-inventory-audit/routines-inventory-audit.component';
import { RoutinesStockAdjustComponent } from './routines-stock-adjust/routines-stock-adjust.component';

const routes: Routes = [

  { path: 'inventory-audit', component: RoutinesInventoryAuditComponent },
  { path: 'stock-adjust', component: RoutinesStockAdjustComponent },
  { path: '', redirectTo: 'inventory-audit', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutinesRoutingModule { }
