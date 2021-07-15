import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsReceiptComponent } from './operations-receipt/operations-receipt.component';
import { OperationsLocationManagementComponent } from './operations-location-management/operations-location-management.component';
import { OperationsHeatMapComponent } from './operations-heat-map/operations-heat-map.component';
import { OperationsDeliveryComponent } from './operations-delivery/operations-delivery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrOwnerDialogComponent } from './operations-receipt/dialogs/or-owner-dialog/or-owner-dialog.component';
import { OrItemDialogComponent } from './operations-receipt/dialogs/or-item-dialog/or-item-dialog.component';
import { OrRuDialogComponent } from './operations-receipt/dialogs/or-ru-dialog/or-ru-dialog.component';
import { OrNetwtDialogComponent } from './operations-receipt/dialogs/or-net-wt-dialog/or-net-wt-dialog.component';
import { OrNetvolDialogComponent } from './operations-receipt/dialogs/or-net-vol-dialog/or-net-vol-dialog.component';
import { OrPutawayDialogComponent } from './operations-receipt/dialogs/or-putaway-dialog/or-putaway-dialog.component';
import { OrLabelDialogComponent } from './operations-receipt/dialogs/or-label-dialog/or-label-dialog.component';
import { OlmGrnDialogComponent } from './operations-location-management/dialogs/olm-grn-dialog/olm-grn-dialog.component';
import { OlmLocationDialogComponent } from './operations-location-management/dialogs/olm-location-dialog/olm-location-dialog.component';
import { OhmCellDialogComponent } from './operations-heat-map/dialogs/ohm-cell-dialog/ohm-cell-dialog.component';
import { OdShiptoDialogComponent } from './operations-delivery/dialogs/od-shipto-dialog/od-shipto-dialog.component';

@NgModule({
  declarations: [
    OperationsReceiptComponent,
    OperationsLocationManagementComponent,
    OperationsHeatMapComponent,
    OperationsDeliveryComponent,
    OrOwnerDialogComponent,
    OrItemDialogComponent,
    OrRuDialogComponent,
    OrNetwtDialogComponent,
    OrNetvolDialogComponent,
    OrPutawayDialogComponent,
    OrLabelDialogComponent,
    OlmGrnDialogComponent,
    OlmLocationDialogComponent,
    OhmCellDialogComponent,
    OdShiptoDialogComponent
  ],
  imports: [CommonModule, SharedModule, OperationsRoutingModule]
})
export class OperationsModule {}
