import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from 'src/app/services/site-translate.service';

@Component({
  selector: 'ibe-owner-dialog',
  templateUrl: './owner-dialog.component.html',
  styleUrls: ['./owner-dialog.component.scss']
})
export class OwnerDialogComponent implements OnInit {
  dataItemOwnerForm!: FormGroup;

  constructor( private fb: FormBuilder,  private dialogRef: MatDialogRef<OwnerDialogComponent>,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,) {
    this.createDataItemOwnerForm();
   }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  createDataItemOwnerForm() {
    this.dataItemOwnerForm = this.fb.group({
      warehouse: '',
      item: '',
      type: '',
      owner: '',
      ownerName: ''
    });
  }
  onDataItemOwnerSubmit() {}

  resetItemDataOwnerForm() {
    this.dataItemOwnerForm.reset();
  }
  get dataItemFormOwnerControls() {
    return this.dataItemOwnerForm.controls;
  }

  

}
