import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';


@Component({
  selector: 'ibe-olm-location-dialog',
  templateUrl: './olm-location-dialog.component.html',
  styleUrls: ['./olm-location-dialog.component.scss']
})
export class OlmLocationDialogComponent implements OnInit {
  LocationForm!: FormGroup;
  constructor(  private fb: FormBuilder, public dialog: MatDialog) {
    this.createLocationForm()
  }

  ngOnInit(): void {
  }

  createLocationForm() {
    this.LocationForm = this.fb.group({
      wh: [''],
      code: ['',  [Validators.pattern(patternsHelper.alphanumeric)]],
      type: [''],
      dateoperator: [''],
      date: [''],
      po: [''],
      item: [''],
      status: ['']
    });
  }

  get LocationFormControls() {
    return this.LocationForm.controls;
  }

  saveLocationFormData() {}

  resetLocationForm() {
    this.LocationForm.reset();
  }

}
