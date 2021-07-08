import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsReceiptComponent } from './operations-receipt/operations-receipt.component';
import { OperationsLocationManagementComponent } from './operations-location-management/operations-location-management.component';
import { OperationsHeatMapComponent } from './operations-heat-map/operations-heat-map.component';
import { OperationsDeliveryComponent } from './operations-delivery/operations-delivery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OwnerdialogComponent } from './operations-receipt/dialogs/ownerdialog/ownerdialog.component';
import { ItemdialogComponent } from './operations-receipt/dialogs/itemdialog/itemdialog.component';
import { RudialogComponent } from './operations-receipt/dialogs/rudialog/rudialog.component';
import { NetwtdialogComponent } from './operations-receipt/dialogs/netwtdialog/netwtdialog.component';
import { NetvoldialogComponent } from './operations-receipt/dialogs/netvoldialog/netvoldialog.component';


@NgModule({
  declarations: [  
       OperationsReceiptComponent,
       OperationsLocationManagementComponent,
       OperationsHeatMapComponent,
       OperationsDeliveryComponent,
       OwnerdialogComponent,
       ItemdialogComponent,
       RudialogComponent,
       NetwtdialogComponent,
       NetvoldialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
