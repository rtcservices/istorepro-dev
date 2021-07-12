import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { OlmGrnDialogComponent } from './dialogs/olm-grn-dialog/olm-grn-dialog.component';
import { OlmLocationDialogComponent } from './dialogs/olm-location-dialog/olm-location-dialog.component';

@Component({
  selector: 'ibe-operations-location-management',
  templateUrl: './operations-location-management.component.html',
  styleUrls: ['./operations-location-management.component.scss']
})
export class OperationsLocationManagementComponent implements OnInit {
  LocationManagementForm!: FormGroup;
  constructor(  private fb: FormBuilder, public dialog: MatDialog) {
    this.createLocationManagementForm()
  }

  ngOnInit(): void {
  }

  createLocationManagementForm() {
    this.LocationManagementForm = this.fb.group({
      warehouse: ['',  [Validators.required]],
      grn: ['',  [Validators.required]],
      item: ['',  [Validators.required]],
      sku: ['',  [ Validators.pattern(patternsHelper.alphanumeric)]],
      totalqty: [''],
      untrackedqty: ['']
    });
  }

  get LocationManagementFormControls() {
    return this.LocationManagementForm.controls;
  }

  saveLocationManagementFormData() {}

  resetLocationManagementForm() {
    this.LocationManagementForm.reset();
  }

  openGrnDialog() {
    this.dialog.open(OlmGrnDialogComponent, {
      width: '800px'
    });
  }

  openLocationDialog() {
    this.dialog.open(OlmLocationDialogComponent, {
      width: '800px'
    });
  }

}
