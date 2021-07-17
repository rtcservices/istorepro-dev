import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { patternsHelper } from '../../../helpers/patterns.helper';
import { MatDialog } from '@angular/material/dialog';
import {
  OperationDeliveryModel,
  OperationDeliverySearchModel
} from '../models/operations-delivery.model';
import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { OdShiptoDialogComponent } from './dialogs/od-shipto-dialog/od-shipto-dialog.component';
import { OdOwnerDialogComponent } from './dialogs/od-owner-dialog/od-owner-dialog.component';
import { OdItemDialogComponent } from './dialogs/od-item-dialog/od-item-dialog.component';
import { TitleService } from 'src/app/services/title.service';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from 'src/app/services/site-translate.service';
@Component({
  selector: 'ibe-operations-delivery',
  templateUrl: './operations-delivery.component.html',
  styleUrls: ['./operations-delivery.component.scss']
})
export class OperationsDeliveryComponent implements OnInit {
  @ViewChild('OperationDeliveryTab', { static: false })
  OperationDeliveryTab!: MatTabGroup;
  dataDeliveryForm!: FormGroup;
  searchDeliveryForm!: FormGroup;
  formErrorTranslated = '';
  filterErrorTranslated = '';
  searchDataSource: OperationDeliverySearchModel[] = [];
  dummySearchModel: OperationDeliverySearchModel[] = [
    {
      wh: 'GEM1234',
      owner: 'Gemini Software',
      drn: '1213a1a',
      date: '1213a1a',
      shipto: '1213a1a',
      status: 'active',
      return: '1'
    },
    {
      wh: 'GEM1234',
      owner: 'Gemini Software',
      drn: '1213a1a',
      date: '1213a1a',
      shipto: '1213a1a',
      status: 'active',
      return: '1'
    }
  ];

  deliveryDataSource: OperationDeliveryModel[] = [];
  dummydeliveryModel: OperationDeliveryModel[] = [
    {
      item: '',
      grn: '',
      description: '',
      po: '1234',
      sku: 'UNT',
      batchnumber: '222222',
      mfg: '',
      expiry: '',
      location: 'A4123',
      stock: '1',
      alloc: '1',
      pkd: '1'
    },
    {
      item: '',
      grn: '',
      description: '',
      po: '1234',
      sku: 'UNT',
      batchnumber: '222222',
      mfg: '',
      expiry: '',
      location: 'A4123',
      stock: '',
      alloc: '',
      pkd: ''
    }
  ];

  displayedColumns = [
    'warehouse',
    'owner',
    'drn',
    'shipto',
    'status',
    'return'
  ];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService
  ) {
    this.createDataDeliveryForm();
    this.createSearchDeliveryForm();
  }

  ngOnInit(): void {
    this.deliveryDataSource = this.dummydeliveryModel;
    this.titleService.changeTitleTranslated('menu.operationsDelivery');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

  createDataDeliveryForm() {
    this.dataDeliveryForm = this.fb.group({
      warehouse: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      owner: ['', [Validators.required]],
      drn: ['', [Validators.required]],
      date: ['', [Validators.required]],
      shipto: ['', [Validators.required]],
      do: ['', [Validators.required]],
      dt: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      so: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      remarks: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      item: ['', [Validators.required]],
      po: ['', [Validators.required]],
      batchnumber: ['', [Validators.required]],
      receiptdateoperator: [''],
      receiptdate: [''],
      expdateoperator: [''],
      expdate: [''],
      pick: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      qty: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      reworkonly: ['']
    });
  }

  get dataDeliveryFormControls() {
    return this.dataDeliveryForm.controls;
  }

  onDataDeliverySubmit() {}

  deleteDeliveryData() {}

  resetDeliveryDataForm() {
    this.dataDeliveryForm.reset();
  }

  saveDeliveryData() {}

  createSearchDeliveryForm() {
    this.searchDeliveryForm = this.fb.group({
      warehouse: [''],
      owner: [''],
      drn: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      dateoperator: [''],
      deliverydate: [''],
      po: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      do: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      so: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      item: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      shipto: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      batchnumber: [''],
      status: ['']
    });
  }

  get searchDeliveryFormControls() {
    return this.searchDeliveryForm.controls;
  }

  onSearchDeliverySubmit() {
    if (!this.searchDeliveryForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const warehouse: string =
      this.searchDeliveryForm.get('warehouse')?.value || '';
    const owner: string = this.searchDeliveryForm.get('owner')?.value || '';
    const drn: string = this.searchDeliveryForm.get('drn')?.value || '';
    const dateoperator: string =
      this.searchDeliveryForm.get('dateoperator')?.value || '';
    const deliverydate: string =
      this.searchDeliveryForm.get('deliverydate')?.value || '';
    const po: string = this.searchDeliveryForm.get('po')?.value || '';
    const doc: string = this.searchDeliveryForm.get('do')?.value || '';
    const so: string = this.searchDeliveryForm.get('so')?.value || '';
    const status: string = this.searchDeliveryForm.get('status')?.value || '';
    const item: string = this.searchDeliveryForm.get('item')?.value || '';
    const shipto: string = this.searchDeliveryForm.get('shipto')?.value || '';
    const batchnumber: string =
      this.searchDeliveryForm.get('batchnumber')?.value || '';
    if (
      warehouse.trim() === '' &&
      owner.trim() === '' &&
      drn.trim() === '' &&
      dateoperator.trim() === '' &&
      deliverydate.trim() === '' &&
      po.trim() === '' &&
      doc.trim() === '' &&
      so.trim() === '' &&
      shipto.trim() === '' &&
      batchnumber.trim() === '' &&
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

  resetDeliverySearchForm() {
    this.searchDeliveryForm.reset();
    this.searchDataSource = [];
  }

  openShiptoDialog() {
    this.dialog.open(OdShiptoDialogComponent, {
      width: '800px'
    });
  }

  openOwnerDialog() {
    this.dialog.open(OdOwnerDialogComponent, {
      width: '800px'
    });
  }

  openItemDialog() {
    this.dialog.open(OdItemDialogComponent, {
      width: '800px'
    });
  }
}
