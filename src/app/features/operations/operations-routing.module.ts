import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperationsReceiptComponent } from './operations-receipt/operations-receipt.component';
import { OperationsLocationManagementComponent } from './operations-location-management/operations-location-management.component';
import { OperationsDeliveryComponent } from './operations-delivery/operations-delivery.component';

const routes: Routes = [

  { path: 'receipt', component: OperationsReceiptComponent },
  { path: 'location-management', component: OperationsLocationManagementComponent },
  { path: 'delivery', component: OperationsDeliveryComponent },
  { path: '', redirectTo: 'receipt', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
