import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patternsHelper } from '../../../../helpers/patterns.helper';
import { MatDialog } from '@angular/material/dialog';
import { DsPickScanDialogComponent } from './dialogs/ds-pick-scan-dialog/ds-pick-scan-dialog.component';
import { DsPickItemAssistanceDialogComponent } from './dialogs/ds-pick-item-assistance-dialog/ds-pick-item-assistance-dialog.component';

@Component({
  selector: 'ibe-ds-pick',
  templateUrl: './ds-pick.component.html',
  styleUrls: ['./ds-pick.component.scss']
})
export class DsPickComponent implements OnInit {
  pickForm!: FormGroup;
  type = '';
  constructor( private fb: FormBuilder,
    public dialog: MatDialog) {
      this.createpickForm()
    }

  ngOnInit(): void {
  }

  createpickForm() {
    this.pickForm = this.fb.group({
      type: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      scan: [
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
      ], //specific to grn type
      item: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ], //specific to item type
      good: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.numeric)]
      ],
      dmg: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ]
    });
  }

  get pickFormControls() {
    return this.pickForm.controls;
  }

  onPickFormSubmit() {}
  resetPickForm() {
    this.pickForm.reset();
    this.type = 'item';
  }

  openScanDialog() {
    this.dialog.open(DsPickScanDialogComponent, {
      width: '615px'
    });
  }

  openItemAssistanceDialog() {
    this.dialog.open(DsPickItemAssistanceDialogComponent, {
      width: '615px'
    });
  }
}
