import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from 'src/app/services/site-translate.service';

@Component({
  selector: 'ibe-stpref-dialog',
  templateUrl: './stpref-dialog.component.html',
  styleUrls: ['./stpref-dialog.component.scss']
})
export class BiStprefDialogComponent implements OnInit {
  dataItemStForm!: FormGroup;
  constructor( private fb: FormBuilder,  private dialogRef: MatDialogRef<BiStprefDialogComponent>,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,) {
      this.createDataItemStForm();
   }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }


  createDataItemStForm() {
    this.dataItemStForm = this.fb.group({
      warehouse: '',
      item: '',
      exclusiveZone:'',
      exclusiveLocationZone: ''
    });
  }
  get dataItemFormStControls() {
    return this.dataItemStForm.controls;
  }
  onDataItemStSubmit() {}

  resetItemDataStForm() {
    this.dataItemStForm.reset();
  }

  

}
