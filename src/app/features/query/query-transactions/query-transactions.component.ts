import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { patternsHelper } from '../../../helpers/patterns.helper';
import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';
import { QueryTransactionDeliveryModel, QueryTransactionReceiptModel } from '../models/query-transaction.model';

@Component({
  selector: 'ibe-query-transactions',
  templateUrl: './query-transactions.component.html',
  styleUrls: ['./query-transactions.component.scss']
})
export class QueryTransactionsComponent implements OnInit {

  formErrorTranslated = '';
  filterErrorTranslated = '';

  receiptForm!: FormGroup;
  deliveryForm!: FormGroup;

  receiptDataSource: QueryTransactionReceiptModel[] = [];
  dummyReceiptModel: QueryTransactionReceiptModel[] = [
    { wh : "Warehouse" , owner : "Owner", grn : "GRN", date : "Date", poRefNo : "Po/Ref No", status: "status", origin: "Origin"},
    { wh : "Warehouse" , owner : "Owner", grn : "GRN", date : "Date", poRefNo : "Po/Ref No", status: "status", origin: "Origin"},
  ];

  deliveryDataSource: QueryTransactionDeliveryModel[] = [];
  dummyDeliveryModel: QueryTransactionDeliveryModel[] = [
    { wh : "Warehouse" , owner : "Owner", shipTo : "Ship To", Date : "Date", do : "DO", so: "SO", dt : "DT", drn : "DRN"},
    { wh : "Warehouse" , owner : "Owner", shipTo : "Ship To", Date : "Date", do : "DO", so: "SO", dt : "DT", drn : "DRN"}
  ];

  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService
  ) { 
    this.createDeliveryForm();
    this.createReceiptForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.setupWarehouse');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });

    this.receiptDataSource = this.dummyReceiptModel;
    this.deliveryDataSource = this.dummyDeliveryModel;

  }

  createReceiptForm() {
    this.receiptForm = this.fb.group({
      warehouse: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      owner: [
        '',
        [Validators.maxLength(10),Validators.pattern(patternsHelper.alphanumeric)]
      ],
      item: [
        '',
        [Validators.maxLength(50), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      batchNo: [
        '',
        [Validators.maxLength(35), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      poRefNo: [
        '',
        [Validators.maxLength(18), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      origin: '', 
      status: '',
      grn: [
        '',
        [Validators.maxLength(18), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      receiptFrom: '', 
      receiptTo: '', 
      stock: ''
    });
  }

  get receiptFormControls() {
    return this.receiptForm.controls;
  }

  onReceiptSubmit() {}

  openOwnerDialog() {
  }

  createDeliveryForm() {
    this.deliveryForm = this.fb.group({
      warehouse: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      owner: [
        '',
        [Validators.maxLength(10),Validators.pattern(patternsHelper.alphanumeric)]
      ],
      poRefNo: [
        '',
        [Validators.maxLength(18), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      item: [
        '',
        [Validators.maxLength(50), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      batchNo: [
        '',
        [Validators.maxLength(35), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      drn: [
        '',
        [Validators.maxLength(18), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      so: [
        '',
        [Validators.maxLength(35), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      do: [
        '',
        [Validators.maxLength(35), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      status: '',
      deliveryFrom: '', 
      deliveryTo: '', 
      dt: [
        '',
        [Validators.maxLength(35), Validators.pattern(patternsHelper.alphanumeric)]
      ]
    });
  }

  get deliveryFormControls() {
    return this.deliveryForm.controls;
  }

  onDeliverySubmit() {}
}
