import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from 'src/app/services/site-translate.service';
import { OperationReceiptItemDialog, OperationReceiptOwnerDialog } from '../../../models/operations-receipt.model';

@Component({
  selector: 'ibe-itemdialog',
  templateUrl: './or-item-dialog.component.html',
  styleUrls: ['./or-item-dialog.component.scss']
})
export class OrItemdialogComponent implements OnInit {
  dataItemForm!: FormGroup;
  searchDataSource: OperationReceiptItemDialog[] = [];
  dummySearchModel: OperationReceiptItemDialog[] = [
    {
      type: 'Vendor', item: '23123', description: 'Havells india', sku: "ssss"
    },
    {
      type: 'Vendor', item: '23123', description: 'Havells india', sku: "ssss"
    },
    {
      type: 'Vendor', item: '23123', description: 'Havells india', sku: "ssss"
    },
    {
      type: 'Vendor', item: '23123', description: 'Havells india', sku: "ssss"
    }

  ];
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<OrItemdialogComponent>,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService) {
    this.createDataItemForm();
  }
  ngOnInit(): void {
    this.searchDataSource=this.dummySearchModel;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  createDataItemForm() {
    this.dataItemForm = this.fb.group({
      item: '',
      description: '',
      type: '',
      sku: ''
    });
  }
  onDataItemSubmit() { }

  resetDataItemForm() {
    this.dataItemForm.reset();
  }
  get dataFormItemControls() {
    return this.dataItemForm.controls;
  }

}
