import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from 'src/app/services/site-translate.service';

@Component({
  selector: 'ibe-owner-dialog',
  templateUrl: './bi-owner-dialog.component.html',
  styleUrls: ['./bi-owner-dialog.component.scss']
})
export class BiOwnerDialogComponent implements OnInit {
  dataItemOwnerForm!: FormGroup;

  constructor( private fb: FormBuilder,  private dialogRef: MatDialogRef<BiOwnerDialogComponent>,
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
