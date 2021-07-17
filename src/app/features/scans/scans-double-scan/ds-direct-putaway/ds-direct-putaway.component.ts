import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { DsPutawayLocationDialogComponent } from '../ds-putaway/dialogs/ds-putaway-location-dialog/ds-putaway-location-dialog.component';
import { DsDirectPutawayLocationDialogComponent } from './dialogs/ds-direct-putaway-location-dialog/ds-direct-putaway-location-dialog.component';

@Component({
  selector: 'ibe-ds-direct-putaway',
  templateUrl: './ds-direct-putaway.component.html',
  styleUrls: ['./ds-direct-putaway.component.scss']
})
export class DsDirectPutawayComponent implements OnInit {
  directPutawayForm!: FormGroup;
  constructor(  private fb: FormBuilder,public dialog: MatDialog) {
    this.createDirectputawayForm()
  }

  ngOnInit(): void {
  }


  createDirectputawayForm() {
    this.directPutawayForm = this.fb.group({
      location: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      grnsl: [
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

  get directPutawayFormControls() {
    return this.directPutawayForm.controls;
  }

  ondirectPutawayFormSubmit() {}
  resetdirectPutawayForm() {
    this.directPutawayForm.reset();

  }

  openLocationDialog() {
    this.dialog.open(DsDirectPutawayLocationDialogComponent, {
      width: '800px'
    });
  }



}
