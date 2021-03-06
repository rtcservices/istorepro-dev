import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { DsDirectTransferItemAssistanceDialogComponent } from './dialogs/ds-direct-transfer-item-assistance-dialog/ds-direct-transfer-item-assistance-dialog.component';
import { DsDirectTransferLocationDialogComponent } from './dialogs/ds-direct-transfer-location-dialog/ds-direct-transfer-location-dialog.component';
import { DsDirectTransferPutawayDialogComponent } from './dialogs/ds-direct-transfer-putaway-dialog/ds-direct-transfer-putaway-dialog.component';
import { DsDirectTransferScanDialogComponent } from './dialogs/ds-direct-transfer-scan-dialog/ds-direct-transfer-scan-dialog.component';

@Component({
  selector: 'ibe-ds-direct-transfer',
  templateUrl: './ds-direct-transfer.component.html',
  styleUrls: ['./ds-direct-transfer.component.scss']
})
export class DsDirectTransferComponent implements OnInit {
  DirectTransferForm!: FormGroup;
  mode='pick'
  type:any
  constructor( private fb: FormBuilder,public dialog: MatDialog) {
    this.createDirectTransferForm()
  }

  ngOnInit(): void {}

  createDirectTransferForm() {
    this.DirectTransferForm = this.fb.group({
      mode: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      type: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      scan: [
        '',
        [Validators.required]
      ],
      location: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      grnsl: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      item: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      good: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.numeric)]
      ],
      dmg: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.numeric)]
      ]
    });
  }

  get DirectTransferFormControls() {
    return this.DirectTransferForm.controls;
  }
  onDirectTransferFormSubmit() {}
  resetDirectTransferForm() {
    this.DirectTransferForm.reset();
    this.mode='putaway'
  }
   openItemAssistanceDialog() {
    this.dialog.open(DsDirectTransferItemAssistanceDialogComponent, {
      width: '615px'
    });
  }

  openPutawayDialog() {
    this.dialog.open(DsDirectTransferPutawayDialogComponent, {
      width: '615px'
    });
  }

  openLocationDialog() {
    this.dialog.open(DsDirectTransferLocationDialogComponent, {
      width: '615px'
    });
  }

  openScanDialog() {
    this.dialog.open(DsDirectTransferScanDialogComponent, {
      width: '615px'
    });
  }
}
