import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ScansRoutingModule } from './scans-routing.module';
import { ScansDoubleScanComponent } from './scans-double-scan/scans-double-scan.component';
import { DsPutawayComponent } from './scans-double-scan/ds-putaway/ds-putaway.component';
import { DsPutawayScanDialogComponent } from './scans-double-scan/ds-putaway/dialogs/ds-putaway-scan-dialog/ds-putaway-scan-dialog.component';
import { DsPutawayItemAssistanceDialogComponent } from './scans-double-scan/ds-putaway/dialogs/ds-putaway-item-assistance-dialog/ds-putaway-item-assistance-dialog.component';
import { DsPickComponent } from './scans-double-scan/ds-pick/ds-pick.component';
import { DsPickScanDialogComponent } from './scans-double-scan/ds-pick/dialogs/ds-pick-scan-dialog/ds-pick-scan-dialog.component';
import { DsPickItemAssistanceDialogComponent } from './scans-double-scan/ds-pick/dialogs/ds-pick-item-assistance-dialog/ds-pick-item-assistance-dialog.component';
import { DsDirectPutawayComponent } from './scans-double-scan/ds-direct-putaway/ds-direct-putaway.component';
import { DsInventoryAuditComponent } from './scans-double-scan/ds-inventory-audit/ds-inventory-audit.component';
import { DsInventoryAuditIanDialogComponent } from './scans-double-scan/ds-inventory-audit/dialogs/ds-inventory-audit-ian-dialog/ds-inventory-audit-ian-dialog.component';
import { DsInventoryAuditLocationDialogComponent } from './scans-double-scan/ds-inventory-audit/dialogs/ds-inventory-audit-location-dialog/ds-inventory-audit-location-dialog.component';
import { DsInventoryAuditItemAssistanceDialogComponent } from './scans-double-scan/ds-inventory-audit/dialogs/ds-inventory-audit-item-assistance-dialog/ds-inventory-audit-item-assistance-dialog.component';
import { DsDirectTransferComponent } from './scans-double-scan/ds-direct-transfer/ds-direct-transfer.component';
import { DsDirectTransferPutawayDialogComponent } from './scans-double-scan/ds-direct-transfer/dialogs/ds-direct-transfer-putaway-dialog/ds-direct-transfer-putaway-dialog.component';
import { DsDirectTransferItemAssistanceDialogComponent } from './scans-double-scan/ds-direct-transfer/dialogs/ds-direct-transfer-item-assistance-dialog/ds-direct-transfer-item-assistance-dialog.component';
import { DsDirectTransferLocationDialogComponent } from './scans-double-scan/ds-direct-transfer/dialogs/ds-direct-transfer-location-dialog/ds-direct-transfer-location-dialog.component';
import { DsPutawayLocationDialogComponent } from './scans-double-scan/ds-putaway/dialogs/ds-putaway-location-dialog/ds-putaway-location-dialog.component';
import { DsDirectPutawayLocationDialogComponent } from './scans-double-scan/ds-direct-putaway/dialogs/ds-direct-putaway-location-dialog/ds-direct-putaway-location-dialog.component';
import { DsDirectTransferScanDialogComponent } from './scans-double-scan/ds-direct-transfer/dialogs/ds-direct-transfer-scan-dialog/ds-direct-transfer-scan-dialog.component';

@NgModule({
  declarations: [
    ScansDoubleScanComponent,
    DsPutawayComponent,
    DsPutawayScanDialogComponent,
    DsPutawayItemAssistanceDialogComponent,
    DsPickComponent,
    DsPickScanDialogComponent,
    DsPickItemAssistanceDialogComponent,
    DsDirectPutawayComponent,
    DsInventoryAuditComponent,
    DsInventoryAuditIanDialogComponent,
    DsInventoryAuditLocationDialogComponent,
    DsInventoryAuditItemAssistanceDialogComponent,
    DsDirectTransferComponent,
    DsDirectTransferPutawayDialogComponent,
    DsDirectTransferItemAssistanceDialogComponent,
    DsDirectTransferLocationDialogComponent,
    DsPutawayLocationDialogComponent,
    DsDirectPutawayLocationDialogComponent,
    DsDirectTransferScanDialogComponent
  ],
  imports: [CommonModule, ScansRoutingModule, SharedModule]
})
export class ScansModule {}
