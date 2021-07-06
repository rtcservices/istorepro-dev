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
export class StprefDialogComponent implements OnInit {
  dataItemStForm!: FormGroup;
  constructor( private fb: FormBuilder,  private dialogRef: MatDialogRef<StprefDialogComponent>,
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
      itemType:'',
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
