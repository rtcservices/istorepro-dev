import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from 'src/app/services/site-translate.service';
import { OperationReceiptOwnerDialog } from '../../../models/operations-receipt.model';

@Component({
  selector: 'ibe-ownerdialog',
  templateUrl: './ownerdialog.component.html',
  styleUrls: ['./ownerdialog.component.scss']
})

export class OwnerdialogComponent implements OnInit {
  dataOwnerForm!: FormGroup;
  searchDataSource: OperationReceiptOwnerDialog[] = [];
  dummySearchModel: OperationReceiptOwnerDialog[] = [
    {
      type: 'Vendor', code: '23123', name: 'Havells india'
    },
    {
      type: 'Vendor', code: '23123', name: 'Havells india'
    },
    {
      type: 'Vendor', code: '23123', name: 'Havells india'
    },
    {
      type: 'Vendor', code: '23123', name: 'Havells india'
    }

  ];
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<OwnerdialogComponent>,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService) {
    this.createDataOwnerForm();
  }
  ngOnInit(): void {
    this.searchDataSource = this.dummySearchModel;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  createDataOwnerForm() {
    this.dataOwnerForm = this.fb.group({
      code: '',
      name: ''
    });
  }
  onDataOwnerSubmit() { }

  resetDataOwnerForm() {
    this.dataOwnerForm.reset();
  }
  get dataFormOwnerControls() {
    return this.dataOwnerForm.controls;
  }

}
