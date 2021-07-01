import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../../../services/loader.service';
import { BaseItemTypeCodeModel, BaseItemTypeModel, BaseItemTypeSearchModel } from '../models/base-item-type.model';

import { TitleService } from '../../../services/title.service';
import { SiteTranslateService } from '../../../services/site-translate.service';

import { patternsHelper } from '../../../helpers/patterns.helper';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'ibe-base-item-type',
  templateUrl: './base-item-type.component.html',
  styleUrls: ['./base-item-type.component.scss']
})
export class BaseItemTypeComponent implements OnInit {
  @ViewChild('baseItemTypeTab', { static: false })
  baseItemTypeTab!: MatTabGroup;

  displayedSearchItemTypeColumns = ['code', 'description', 'storageType'];

  whControlDataSource: BaseItemTypeCodeModel[] = [];
  dummyWHControlModel: BaseItemTypeCodeModel[] = [
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD' },
    { checked: false, code: '3254', name: 'NIPPON PAINT (INDIA) PRIVATE LTD' },
    {
      checked: false,
      code: '2353',
      name: 'HAVELLS INDIA LIMITED - SBD (FLYJAC WH)'
    },
    { checked: false, code: '1368', name: 'BAJAJ ELECTRICALS LIMITED' },
    { checked: false, code: '8132', name: 'HAVELLS INDIA LIMITED (FLYJAC WH)' },
    { checked: false, code: '1378', name: 'HAVELLS INDIA LIMITED (INDORE)' },
    { checked: false, code: '3451', name: 'BAJAJ ELECTRICALS LIMITED' },
    { checked: false, code: '9073', name: 'BRIGHTSTAR KHALAPUR' },
    { checked: false, code: '1583', name: 'HAVELLS INDIA LIMITED (FLYJAC WH)' }
  ];

  searchItemTypeForm!: FormGroup;
  searchItemTypeDataSource: BaseItemTypeSearchModel[] = [];
  dummyItemTypeSearchModel: BaseItemTypeSearchModel[] = [
    { code: 'GEM1234', description: 'Gemini Software', storageType : "Storage 1" },
    { code: 'GEM1234', description: 'Gemini Software', storageType : "Storage 2" },
    { code: 'GEM1234', description: 'Gemini Software', storageType : "Storage 3" },
    { code: 'GEM1234', description: 'Gemini Software', storageType : "Storage 4" },
    { code: 'GEM1234', description: 'Gemini Software', storageType : "Storage 5" },
    { code: 'GEM1234', description: 'Gemini Software', storageType : "Storage 6" },
    { code: 'GEM1234', description: 'Gemini Software', storageType : "Storage 7" },
  ];
  displayedwhControlColumns = ['code', 'name'];

  dataItemTypeForm!: FormGroup

  formErrorTranslated = '';
  filterErrorTranslated = '';

  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService
  ) {
    this.createDataWarehouseForm();
    this.createSearchItemTypeForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.setupCompany');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
    this.whControlDataSource = this.dummyWHControlModel;
  }

  createDataWarehouseForm() {
    this.dataItemTypeForm = this.fb.group({
      code: [
        '',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      storageType: ['', [Validators.required]],
      expiryAlertDays: ['', [Validators.required]],
      consolidateOn: '',
      defaultPick: ['', [Validators.required]],
      expiry: ['', [Validators.required]],
      manufacturingDate: ['', [Validators.required]],
      batchNo: ['', [Validators.required]]
    });
  }

  get dataItemTypeControls() {
    return this.dataItemTypeForm.controls;
  }

  createSearchItemTypeForm() {
    this.searchItemTypeForm = this.fb.group({
      code: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      description: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      storageType: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      warehouse: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      expiry: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      MfgDate: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      batchNo: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
    });
  }

  get searchItemTypeFormControls() {
    return this.searchItemTypeForm.controls;
  }

  onSearchItemTypeSubmit() {
    if (!this.searchItemTypeForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const code: string =
      this.searchItemTypeForm.get('code')?.value || '';
    const description: string =
      this.searchItemTypeForm.get('description')?.value || '';
    if (code.trim() === '' && description.trim() === '') {
      this.notification.error(this.filterErrorTranslated);
      return;
    } else {
      this.loader.show();
      setTimeout(() => {
        this.searchItemTypeDataSource = [...this.dummyItemTypeSearchModel];
        this.loader.hide();
      }, 500);
    }
  }

  saveCompanyData() {}
  deleteCompanyData() {}

  resetCompanyDataForm() {
    this.dataItemTypeForm.reset();
  }

  resetItemTypeSearchForm() {
    this.searchItemTypeForm.reset();
    this.searchItemTypeDataSource = [];
  }

  searchItemClick(event: any, item: BaseItemTypeSearchModel, idx: number) {
    const tabGroup = this.baseItemTypeTab;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
    tabGroup.selectedIndex = 0;
  }
}
