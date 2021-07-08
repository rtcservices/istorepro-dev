import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';

import { patternsHelper } from '../../../helpers/patterns.helper';
import { OperationReceiptModel, OperationReceiptSearchModel } from '../models/operations-receipt.model';

import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';
import { MatDialog } from '@angular/material/dialog';
import { OwnerdialogComponent } from './dialogs/ownerdialog/ownerdialog.component';
import { ItemdialogComponent } from './dialogs/itemdialog/itemdialog.component';
import { NetwtdialogComponent } from './dialogs/netwtdialog/netwtdialog.component';
import { NetvoldialogComponent } from './dialogs/netvoldialog/netvoldialog.component';
import { RudialogComponent } from './dialogs/rudialog/rudialog.component';


@Component({
  selector: 'ibe-operations-receipt',
  templateUrl: './operations-receipt.component.html',
  styleUrls: ['./operations-receipt.component.scss']
})
export class OperationsReceiptComponent implements OnInit {
  @ViewChild('OperationReceiptTab', { static: false })
  OperationReceiptTab!: MatTabGroup;

  searchReceiptForm!: FormGroup;
  searchDataSource: OperationReceiptSearchModel[] = [];
  dummySearchModel: OperationReceiptSearchModel[] = [
    {
      warehouse: 'GEM1234', owner: 'Gemini Software', grn: '1213a1a',
      receiptDate: '1213a1a',
      po: '1213a1a',
      status: 'active',
      remarks: '1213a1a1213a1a1213a1a'
    },
    {
      warehouse: 'GEM1234', owner: 'Gemini Software', grn: '1213a1a',
      receiptDate: '1213a1a',
      po: '1213a1a',
      status: 'active',
      remarks: '1213a1a1213a1a1213a1a'
    }

  ];

  receiptDataSource: OperationReceiptModel[] = [];
  dummyreceiptModel: OperationReceiptModel[] = [
   {
    item: 'dummy data ',
    description: 'dummy data ',
    ru: 'dummy data ',
    sku: 'dummy data ',
    qtyexp: 12,
    qtygood: 51,
    qtydmg: 13,
    netwt: 100,
    netvol: 500,
    mfgdate: '21/01/2021',
    expdate: '21/01/2021',
    batchno: '123123',
    remarks: 'dummy data'
   }
  ];

  dataReceiptForm!: FormGroup;

  displayedColumns = ['warehouse', 'owner','grn','receiptDate','po','remarks','status'];

  sectors = ['LOGISTICS', 'FORWARDING', 'OTHER'];
  companyLogo = '../../../../assets/images/company-logo-236x81.jpg';

  formErrorTranslated = '';
  filterErrorTranslated = '';
  constructor(private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService,
    public dialog: MatDialog) {
      this.createDataReceiptForm()
      this.createSearchReceiptForm()
     }

  ngOnInit(): void {
    this.receiptDataSource = [...this.dummyreceiptModel];
  }



  createDataReceiptForm() {
    this.dataReceiptForm = this.fb.group({
      warehouse: [
        '',
        [Validators.required,Validators.pattern(patternsHelper.alphanumeric)]
      ],
      trn: [
        '',
        [Validators.required]
      ],
      grn: [
        '',
        []
      ],
      receiptDate: [
        '',
        [Validators.required]
      ],
      owner: [
        '',
        [Validators.required]
      ],
      po: [
        '',
        [Validators.pattern(patternsHelper.alphanumeric)]
      ],
      remarks: [
        '',
        [Validators.pattern(patternsHelper.alphanumeric)]
      ],
      storageLabel: [
        '',
        [Validators.pattern(patternsHelper.alphanumeric)]
      ],
    });
  }

  get dataReceiptFormControls() {
    return this.dataReceiptForm.controls;
  }

  createSearchReceiptForm() {
    this.searchReceiptForm = this.fb.group({
      warehouse: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      owner: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      grn: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      dateoperator: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      receiptDate: [''],
      po: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      item: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      status: ['']
    });
  }

  get searchReceiptFormControls() {
    return this.searchReceiptForm.controls;
  }

  onDataReceiptSubmit() { }

  onSearchReceiptSubmit() {
    if (!this.searchReceiptForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const warehouse: string =
      this.searchReceiptForm.get('warehouse')?.value || '';
    const owner: string =
      this.searchReceiptForm.get('owner')?.value || '';
      const grn: string =
      this.searchReceiptForm.get('grn')?.value || '';
    const dateoperator: string =
      this.searchReceiptForm.get('dateoperator')?.value || '';
      const receiptDate: string =
      this.searchReceiptForm.get('receiptDate')?.value || '';
    const po: string =
      this.searchReceiptForm.get('po')?.value || '';
      const status: string =
      this.searchReceiptForm.get('status')?.value || '';
    const item: string =
      this.searchReceiptForm.get('item')?.value || '';
    if (warehouse.trim() === '' && owner.trim() === '' &&
    grn.trim() === '' && dateoperator.trim() === '' &&
    po.trim() === '' && receiptDate.trim() === '' && item.trim() === '' && status.trim() === '') {
      this.notification.error(this.filterErrorTranslated);
      return;
    } else {
      this.loader.show();
      setTimeout(() => {
        this.searchDataSource = [...this.dummySearchModel];
        this.loader.hide();
      }, 500);
    }
  }

  resetReceiptSearchForm() {
    this.searchReceiptForm.reset();
    this.searchDataSource = [];
  }

  searchItemClick(event: any, item: OperationReceiptSearchModel, idx: number) {
    const tabGroup = this.OperationReceiptTab;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
    tabGroup.selectedIndex = 0;
  }

  saveReceiptData() { }
  deleteReceiptData() { }

  resetReceiptDataForm() {
    this.dataReceiptForm.reset();
  }


  openownerdialog() {
    this.dialog.open(OwnerdialogComponent, {
      width: '800px'
    });
  }

  openitemdialog() {
    this.dialog.open(ItemdialogComponent, {
      width: '800px'
    });
  }


  openntwtdialog() {
    this.dialog.open(NetwtdialogComponent, {
      width: '800px'
    });
  }


  opennetvoldialog() {
    this.dialog.open(NetvoldialogComponent, {
      width: '800px'
    });
  }

  openrudialog() {
    this.dialog.open(RudialogComponent, {
      width: '800px'
    });
  }



}
