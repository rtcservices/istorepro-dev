import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { patternsHelper } from '../../../helpers/patterns.helper';
import { MatDialog } from '@angular/material/dialog';
import {
  RoutinesStockAdjustModel,
  RoutinesStockAdjustSearchModel
} from '../models/stockAdjust.model';
import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { RsaItemDialogComponent } from './dialogs/rsa-item-dialog/rsa-item-dialog.component';
import { RsaOwnerDialogComponent } from './dialogs/rsa-owner-dialog/rsa-owner-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from 'src/app/services/title.service';
import { SiteTranslateService } from 'src/app/services/site-translate.service';

@Component({
  selector: 'ibe-routines-stock-adjust',
  templateUrl: './routines-stock-adjust.component.html',
  styleUrls: ['./routines-stock-adjust.component.scss']
})
export class RoutinesStockAdjustComponent implements OnInit {
  @ViewChild('RoutinesStockAdjustTab', { static: false })
  RoutinesStockAdjustTab!: MatTabGroup;
  dataStockAdjustForm!: FormGroup;
  searchStockAdjustForm!: FormGroup;
  formErrorTranslated = '';
  filterErrorTranslated = '';
  searchDataSource: RoutinesStockAdjustSearchModel[] = [];
  dummySearchModel: RoutinesStockAdjustSearchModel[] = [
    {
      wh: 'GEM1234',
      owner: 'Gemini Software',
      san: '1213a1a',
      date: '1213a1a'
    },
    {
      wh: 'GEM1234',
      owner: 'Gemini Software',
      san: '1213a1a',
      date: '1213a1a'
    }
  ];

  StockAdjustDataSource: RoutinesStockAdjustModel[] = [];
  dummyStockAdjustModel: RoutinesStockAdjustModel[] = [
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
      adj: '1'
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
      adj: ''
    }
  ];

  displayedColumns = [
    'warehouse',
    'owner',
    'date',
    'san'
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
    this.createDataStockAdjustForm();
    this.createSearchStockAdjustForm();
  }

  ngOnInit(): void {
    this.StockAdjustDataSource = this.dummyStockAdjustModel;
    this.titleService.changeTitleTranslated('menu.routinesInventoryAudit');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

  createDataStockAdjustForm() {
    this.dataStockAdjustForm = this.fb.group({
      warehouse: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      owner: ['', [Validators.required]],
      san: ['', [Validators.required]],
      date: ['', [Validators.required]],
      shipto: ['', [Validators.required]],
      reason: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      remarks: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      item: ['', [Validators.required]],
      po: ['', [Validators.required]],
      batchnumber: ['', [Validators.required]],
      receiptdateoperator: [
        '',
        [Validators.pattern(patternsHelper.alphanumeric)]
      ],
      receiptdate: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      expdateoperator: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      expdate: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      pick: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      qty: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      reworkonly: ['', [Validators.pattern(patternsHelper.alphanumeric)]]
    });
  }

  get dataStockAdjustFormControls() {
    return this.dataStockAdjustForm.controls;
  }

  onDataStockAdjustSubmit() {}

  deleteStockAdjustData() {}

  resetStockAdjustDataForm() {
    this.dataStockAdjustForm.reset();
  }

  saveStockAdjustData() {}

  createSearchStockAdjustForm() {
    this.searchStockAdjustForm = this.fb.group({
      warehouse: [''],
      owner: [''],
      san: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      dateoperator: [''],
      StockAdjustdate: [''],
      po: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      so: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      item: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      batchnumber: ['']
    });
  }

  get searchStockAdjustFormControls() {
    return this.searchStockAdjustForm.controls;
  }

  onSearchStockAdjustSubmit() {
    if (!this.searchStockAdjustForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const warehouse: string =
      this.searchStockAdjustForm.get('warehouse')?.value || '';
    const owner: string = this.searchStockAdjustForm.get('owner')?.value || '';
    const san: string = this.searchStockAdjustForm.get('san')?.value || '';
    const dateoperator: string =
      this.searchStockAdjustForm.get('dateoperator')?.value || '';
    const StockAdjustdate: string =
      this.searchStockAdjustForm.get('StockAdjustdate')?.value || '';
    const po: string = this.searchStockAdjustForm.get('po')?.value || '';
    const so: string = this.searchStockAdjustForm.get('so')?.value || '';
    const item: string = this.searchStockAdjustForm.get('item')?.value || '';
    const batchnumber: string =
      this.searchStockAdjustForm.get('item')?.value || '';
    if (
      warehouse.trim() === '' &&
      owner.trim() === '' &&
      dateoperator.trim() === '' &&
      StockAdjustdate.trim() === '' &&
      po.trim() === '' &&
      so.trim() === '' &&
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

  resetStockAdjustSearchForm() {
    this.searchStockAdjustForm.reset();
    this.searchDataSource = [];
  }

  openItemDialog() {
     this.dialog.open(RsaItemDialogComponent, {
      width: '800px'
    });
  }


  openOwnerDialog() {
    this.dialog.open(RsaOwnerDialogComponent, {
     width: '800px'
   });
 }
}
