import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsReceiptComponent } from './operations-receipt/operations-receipt.component';
import { OperationsLocationManagementComponent } from './operations-location-management/operations-location-management.component';
import { OperationsHeatMapComponent } from './operations-heat-map/operations-heat-map.component';
import { OperationsDeliveryComponent } from './operations-delivery/operations-delivery.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
  
    OperationsReceiptComponent,
       OperationsLocationManagementComponent,
       OperationsHeatMapComponent,
       OperationsDeliveryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
