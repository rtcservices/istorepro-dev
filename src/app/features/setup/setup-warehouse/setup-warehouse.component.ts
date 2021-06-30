import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../../../services/loader.service';
import { SetupWarehouseModel, SetupWarehouseDocumentModel, SetupWarehouseContactModel, SetupWarehouseRuleBoxModel, SetupWarehouseOperatorModel } from '../models/setup-warehouse.model';
import { TitleService } from '../../../services/title.service';
import { SiteTranslateService } from '../../../services/site-translate.service';

import { patternsHelper } from '../../../helpers/patterns.helper';

@Component({
  selector: 'ibe-setup-warehouse',
  templateUrl: './setup-warehouse.component.html',
  styleUrls: ['./setup-warehouse.component.scss']
})
export class SetupWarehouseComponent implements OnInit {
  @ViewChild('setupWarehouseTab', { static: false })
  setupWarehouseTab!: MatTabGroup;

  dataWarehouseForm!: FormGroup;
  warehouseDataModel!: SetupWarehouseModel;
  documentDataModel!: SetupWarehouseDocumentModel;
  contactDataModel!: SetupWarehouseContactModel;
  ruleBoxDataModel!: SetupWarehouseRuleBoxModel;
  operatorDataModel!: SetupWarehouseOperatorModel;

  formErrorTranslated = '';
  filterErrorTranslated = '';

  displayedDocumentColumns = ['type', 'prefix', 'currentNo', 'autoEmail'];
  displayedRuleBoxColumns = ['serialNo', 'rule', 'value'];
  displayedContactColumns = ['name', 'email'];
  displayedOperatorColumns = ['code', 'name', 'loginName', 'inactive'];

  documentDataSource: SetupWarehouseDocumentModel[] = [];
  dummyDocumentModel: SetupWarehouseDocumentModel[] = [
    { type: 'Type 1', prefix: 'pr1', currentNo : 1001 },
    { type: 'Type 2', prefix: 'pr2', currentNo : 1002 },
    { type: 'Type 3', prefix: 'pr3', currentNo : 1003 },
    { type: 'Type 4', prefix: 'pr4', currentNo : 1004 },
    { type: 'Type 5', prefix: 'pr5', currentNo : 1005 },
    { type: 'Type 6', prefix: 'pr6', currentNo : 1006 },
    { type: 'Type 7', prefix: 'pr7', currentNo : 1007 },
    { type: 'Type 8', prefix: 'pr8', currentNo : 1008 },
    { type: 'Type 9', prefix: 'pr9', currentNo : 1009 },
    { type: 'Type 10', prefix: 'pr10', currentNo : 1010 },
  ];

  ruleBoxDataSource: SetupWarehouseRuleBoxModel[] = [];
  dummyRuleBoxModel: SetupWarehouseRuleBoxModel[] = [
    {serialNo: 1, rule: 'Rule 1', value: 'Value 1' },
    {serialNo: 2, rule: 'Rule 2', value: 'Value 2' },
    {serialNo: 3, rule: 'Rule 3', value: 'Value 3' },
    {serialNo: 4, rule: 'Rule 4', value: 'Value 4' },
    {serialNo: 5, rule: 'Rule 5', value: 'Value 5' },
    {serialNo: 6, rule: 'Rule 6', value: 'Value 6' },
    {serialNo: 7, rule: 'Rule 7', value: 'Value 7' },
    {serialNo: 8, rule: 'Rule 8', value: 'Value 8' },
    {serialNo: 9, rule: 'Rule 9', value: 'Value 9' },
    {serialNo: 10, rule: 'Rule 10', value: 'Value 10' },
  ];

  contactDataSource: SetupWarehouseContactModel[] = [];
  dummyContactModel: SetupWarehouseContactModel[] = [
    { name: 'Contact 1', email: 'contact1@hmail.com' },
    { name: 'Contact 2', email: 'contact2@hmail.com' },
    { name: 'Contact 3', email: 'contact3@hmail.com' },
    { name: 'Contact 4', email: 'contact4@hmail.com' },
    { name: 'Contact 5', email: 'contact5@hmail.com' },
    { name: 'Contact 6', email: 'contact6@hmail.com' },
    { name: 'Contact 7', email: 'contact7@hmail.com' },
    { name: 'Contact 8', email: 'contact8@hmail.com' },
    { name: 'Contact 9', email: 'contact9@hmail.com' },
    { name: 'Contact 10', email: 'contact10@hmail.com' },
  ];

  operatorDataSource: SetupWarehouseOperatorModel[] = [];
  dummyoperatorModel: SetupWarehouseOperatorModel[] = [
    { code: 'Code 1', name: 'Operator 1', loginName : 'login 1' },
    { code: 'Code 2', name: 'Operator 2', loginName : 'login 2' },
    { code: 'Code 3', name: 'Operator 3', loginName : 'login 3' },
    { code: 'Code 4', name: 'Operator 4', loginName : 'login 4' },
    { code: 'Code 5', name: 'Operator 5', loginName : 'login 5' },
    { code: 'Code 6', name: 'Operator 6', loginName : 'login 6' },
    { code: 'Code 7', name: 'Operator 7', loginName : 'login 7' },
    { code: 'Code 8', name: 'Operator 8', loginName : 'login 8' },
    { code: 'Code 9', name: 'Operator 9', loginName : 'login 9' },
    { code: 'Code 10', name: 'Operator 10', loginName : 'login 10' },
  ];

  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private translate: TranslateService,
    private titleService: TitleService,
    private siteTranslateService: SiteTranslateService,
  ) {
    this.CreateDataWarehouseForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.setupWarehouse');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });

    this.documentDataSource  = [...this.dummyDocumentModel];
    this.ruleBoxDataSource  = [...this.dummyRuleBoxModel];
    this.contactDataSource  = [...this.dummyContactModel];
    this.operatorDataSource  = [...this.dummyoperatorModel];
  }

  CreateDataWarehouseForm() {
    this.dataWarehouseForm = this.fb.group({
      companyCode: '',
      companyName: '',
      code: [
        '',
        [
          Validators.maxLength(10),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      description: [
        '',
        [
          Validators.maxLength(50),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      address1: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.address)
        ]
      ],
      address2: [
        '',
        [Validators.maxLength(100), Validators.pattern(patternsHelper.address)]
      ],
      address3: [
        '',
        [Validators.maxLength(100), Validators.pattern(patternsHelper.address)]
      ],
      address4: [
        '',
        [Validators.maxLength(100), Validators.pattern(patternsHelper.address)]
      ],
      zip: [
        '',
        [
          Validators.maxLength(50),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      telephone: [
        '',
        [
          Validators.maxLength(30),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      fax: [
        '',
        [
          Validators.maxLength(30),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(500),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      id:  [
        '',
        [
          Validators.required,
          Validators.maxLength(2),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      blockAlertDays: '',
      receiptDeliveryAlertDays: '',
      receiptBackDateLimit: '',
      deliveryBackDateLimit: '',
    });
  }

  get dataWarehouseControls() {
    return this.dataWarehouseForm.controls;
  }

  saveCompanyData() {}
  deleteCompanyData() {}

  resetCompanyDataForm() {
    this.dataWarehouseForm.reset();
  }
}
