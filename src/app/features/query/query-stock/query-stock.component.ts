import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { patternsHelper } from '../../../helpers/patterns.helper';
import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';
import { QueryStockModel } from '../models/query-stock.model';
import { QsOwnerDialogComponent } from './dialogs/qs-owner-dialog/qs-owner-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ibe-query-stock',
  templateUrl: './query-stock.component.html',
  styleUrls: ['./query-stock.component.scss']
})
export class QueryStockComponent implements OnInit {

  formErrorTranslated = '';
  filterErrorTranslated = '';

  stockForm!: FormGroup;

  stockDataSource: QueryStockModel[] = [];
  dummyStockModel: QueryStockModel[] = [
    { wh : "Warehouse" , owner : "Owner", item : "Item", description : "Description", type : "Type", sku : "SKU", stock: 10, allocated : 10, balGood : 5, balDmgOrExp : 5},
    { wh : "Warehouse" , owner : "Owner", item : "Item", description : "Description", type : "Type", sku : "SKU", stock: 10, allocated : 10, balGood : 5, balDmgOrExp : 5}
  ];

  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService, public dialog: MatDialog
  ) { 
    this.createStockForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.setupWarehouse');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });

    this.stockDataSource = this.dummyStockModel;
  }

  createStockForm() {
    this.stockForm = this.fb.group({
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
      expiryFrom: [
        '',
        [Validators.pattern(patternsHelper.alphanumeric)]
      ],
      expiryTo: [
        '',
        [Validators.pattern(patternsHelper.alphanumeric)]
      ]
    });
  }

  get dataStockFormControls() {
    return this.stockForm.controls;
  }

  onStockSubmit() {}

  openOwnerDialog() {
    this.dialog.open(QsOwnerDialogComponent, {
      width: '800px'
    });
  }

}
