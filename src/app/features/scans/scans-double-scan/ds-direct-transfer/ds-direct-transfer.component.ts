import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { DsDirectTransferItemAssistanceDialogComponent } from './dialogs/ds-direct-transfer-item-assistance-dialog/ds-direct-transfer-item-assistance-dialog.component';
import { DsDirectTransferLocationDialogComponent } from './dialogs/ds-direct-transfer-location-dialog/ds-direct-transfer-location-dialog.component';
import { DsDirectTransferPutawayDialogComponent } from './dialogs/ds-direct-transfer-putaway-dialog/ds-direct-transfer-putaway-dialog.component';

@Component({
  selector: 'ibe-ds-direct-transfer',
  templateUrl: './ds-direct-transfer.component.html',
  styleUrls: ['./ds-direct-transfer.component.scss']
})
export class DsDirectTransferComponent implements OnInit {
  DirectTransferForm!: FormGroup;
  mode='putaway'
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
      ruselect: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      rugood: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      rudmg: [
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
  }
   openItemAssistanceDialog() {
    this.dialog.open(DsDirectTransferItemAssistanceDialogComponent, {
      width: '800px'
    });
  }

  openPutawayDialog() {
    this.dialog.open(DsDirectTransferPutawayDialogComponent, {
      width: '800px'
    });
  }

  openLocationDialog() {
    this.dialog.open(DsDirectTransferLocationDialogComponent, {
      width: '800px'
    });
  }
}
