import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsReceiptComponent } from './operations-receipt/operations-receipt.component';
import { OperationsLocationManagementComponent } from './operations-location-management/operations-location-management.component';
import { OperationsHeatMapComponent } from './operations-heat-map/operations-heat-map.component';
import { OperationsDeliveryComponent } from './operations-delivery/operations-delivery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrOwnerdialogComponent } from './operations-receipt/dialogs/or-owner-dialog/or-owner-dialog.component';
import { OrItemdialogComponent } from './operations-receipt/dialogs/or-item-dialog/or-item-dialog.component';
import { OrRudialogComponent } from './operations-receipt/dialogs/or-ru-dialog/or-ru-dialog.component';
import { OrNetwtdialogComponent } from './operations-receipt/dialogs/or-net-wt-dialog/or-net-wt-dialog.component';
import { OrNetvoldialogComponent } from './operations-receipt/dialogs/or-net-vol-dialog/or-net-vol-dialog.component';


@NgModule({
  declarations: [  
       OperationsReceiptComponent,
       OperationsLocationManagementComponent,
       OperationsHeatMapComponent,
       OperationsDeliveryComponent,
       OrOwnerdialogComponent,
       OrItemdialogComponent,
       OrRudialogComponent,
       OrNetwtdialogComponent,
       OrNetvoldialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
