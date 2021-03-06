import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';

import { patternsHelper } from '../../../helpers/patterns.helper';
import {
  OperationReceiptModel,
  OperationReceiptSearchModel
} from '../models/operations-receipt.model';

import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';
import { MatDialog } from '@angular/material/dialog';
import { OrOwnerDialogComponent } from './dialogs/or-owner-dialog/or-owner-dialog.component';
import { OrItemDialogComponent } from './dialogs/or-item-dialog/or-item-dialog.component';
import { OrNetwtDialogComponent } from './dialogs/or-net-wt-dialog/or-net-wt-dialog.component';
import { OrNetvolDialogComponent } from './dialogs/or-net-vol-dialog/or-net-vol-dialog.component';
import { OrRuDialogComponent } from './dialogs/or-ru-dialog/or-ru-dialog.component';
import { OrPutawayDialogComponent } from './dialogs/or-putaway-dialog/or-putaway-dialog.component';
import { OrLabelDialogComponent } from './dialogs/or-label-dialog/or-label-dialog.component';

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
      warehouse: 'GEM1234',
      owner: 'Gemini Software',
      grn: '1213a1a',
      receiptDate: '1213a1a',
      po: '1213a1a',
      status: 'active',
      remarks: '1213a1a1213a1a1213a1a'
    },
    {
      warehouse: 'GEM1234',
      owner: 'Gemini Software',
      grn: '1213a1a',
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
    },
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
    },
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
    },
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
    },
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

  displayedColumns = [
    'warehouse',
    'owner',
    'grn',
    'receiptDate',
    'po',
    'remarks',
    'status'
  ];

  sectors = ['LOGISTICS', 'FORWARDING', 'OTHER'];
  companyLogo = '../../../../assets/images/company-logo-236x81.jpg';

  formErrorTranslated = '';
  filterErrorTranslated = '';
  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService,
    public dialog: MatDialog
  ) {
    this.createDataReceiptForm();
    this.createSearchReceiptForm();
  }

  ngOnInit(): void {
    this.receiptDataSource = [...this.dummyreceiptModel];
    this.titleService.changeTitleTranslated('menu.operationsReceipt');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

  createDataReceiptForm() {
    this.dataReceiptForm = this.fb.group({
      warehouse: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      trn: ['', [Validators.required]],
      grn: ['', []],
      receiptDate: ['', [Validators.required]],
      owner: ['', [Validators.required]],
      po: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      remarks: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      storageLabel: ['', [Validators.pattern(patternsHelper.alphanumeric)]]
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

  onDataReceiptSubmit() {}

  onSearchReceiptSubmit() {
    if (!this.searchReceiptForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const warehouse: string =
      this.searchReceiptForm.get('warehouse')?.value || '';
    const owner: string = this.searchReceiptForm.get('owner')?.value || '';
    const grn: string = this.searchReceiptForm.get('grn')?.value || '';
    const dateoperator: string =
      this.searchReceiptForm.get('dateoperator')?.value || '';
    const receiptDate: string =
      this.searchReceiptForm.get('receiptDate')?.value || '';
    const po: string = this.searchReceiptForm.get('po')?.value || '';
    const status: string = this.searchReceiptForm.get('status')?.value || '';
    const item: string = this.searchReceiptForm.get('item')?.value || '';
    if (
      warehouse.trim() === '' &&
      owner.trim() === '' &&
      grn.trim() === '' &&
      dateoperator.trim() === '' &&
      po.trim() === '' &&
      receiptDate.trim() === '' &&
      item.trim() === '' &&
      status.trim() === ''
    ) {
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

  saveReceiptData() {}
  deleteReceiptData() {}

  resetReceiptDataForm() {
    this.dataReceiptForm.reset();
  }

  openOwnerDialog() {
    this.dialog.open(OrOwnerDialogComponent, {
      width: '800px'
    });
  }

  openItemDialog() {
    this.dialog.open(OrItemDialogComponent, {
      width: '800px'
    });
  }

  openNetWtDialog() {
    this.dialog.open(OrNetwtDialogComponent, {
      width: '800px'
    });
  }

  openNetVolDialog() {
    this.dialog.open(OrNetvolDialogComponent, {
      width: '800px'
    });
  }

  openRuDialog() {
    this.dialog.open(OrRuDialogComponent, {
      width: '800px'
    });
  }

  openPutawayDialog() {
    this.dialog.open(OrPutawayDialogComponent, {
      width: '800px'
    });
  }

  openLabelDialog() {
    this.dialog.open(OrLabelDialogComponent, {
      width: '800px'
    });
  }

}
