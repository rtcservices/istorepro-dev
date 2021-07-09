import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patternsHelper } from '../../../../helpers/patterns.helper';
import { MatDialog } from '@angular/material/dialog';
import { DsPutawayDialogComponent } from './dialogs/ds-putaway-dialog/ds-putaway-dialog.component';
import { DsPutawayItemAssistanceDialogComponent } from './dialogs/ds-putaway-item-assistance-dialog/ds-putaway-item-assistance-dialog.component';
import { DsPutawayLocationDialogComponent } from './dialogs/ds-putaway-location-dialog/ds-putaway-location-dialog.component';

@Component({
  selector: 'ibe-ds-putaway',
  templateUrl: './ds-putaway.component.html',
  styleUrls: ['./ds-putaway.component.scss']
})
export class DsPutawayComponent implements OnInit {
  putawayForm!: FormGroup;
  type = '';
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.createputAwayForm();
  }

  ngOnInit(): void {}

  createputAwayForm() {
    this.putawayForm = this.fb.group({
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

  get putawayFormControls() {
    return this.putawayForm.controls;
  }

  onPutawayFormSubmit() {}
  resetPutawayForm() {
    this.putawayForm.reset();
    this.type = 'item';
  }


  openPutawayDialog() {
    this.dialog.open(DsPutawayDialogComponent, {
      width: '800px'
    });
  }

  openLocationDialog() {
    this.dialog.open(DsPutawayLocationDialogComponent, {
      width: '800px'
    });
  }


  openItemAssistanceDialog() {
    this.dialog.open(DsPutawayItemAssistanceDialogComponent, {
      width: '800px'
    });
  }




}
