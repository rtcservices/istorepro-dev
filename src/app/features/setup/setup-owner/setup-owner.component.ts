import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup, _MatTabGroupBase } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../../../services/loader.service';

import { TitleService } from '../../../services/title.service';
import { SiteTranslateService } from '../../../services/site-translate.service';

import { patternsHelper } from '../../../helpers/patterns.helper';
import { NotificationService } from 'src/app/services/notification.service';
import { elementAt } from 'rxjs/operators';

import { SetupOwnerEmailModel, SetupOwnerShipToModel, SetupOwnerWHControlModel } from '../models/setup-owner.model';

@Component({
  selector: 'ibe-setup-owner',
  templateUrl: './setup-owner.component.html',
  styleUrls: ['./setup-owner.component.scss']
})
export class SetupOwnerComponent implements OnInit, AfterViewInit {

  @ViewChild('setupOwnerTab', { static: false })
  setupOwnerTab!: MatTabGroup;
  @ViewChild('setupOwnerDataTab', { static: false })
  setupOwnerDataTab!: MatTabGroup;

  formErrorTranslated = '';
  filterErrorTranslated = '';

  dataOwnerForm!: FormGroup;

  displayedDocumentColumns = ['type', 'autoEmail'];
  documentDataSource: SetupOwnerEmailModel[] = [];
  dummyDocumentModel: SetupOwnerEmailModel[] = [
    {
      autoEmail: false,
      type: 'TEMPORARY RECEIPT NOTICE',
    },
    {
      autoEmail: true,
      type: 'GOODS RECEIPT NOTICE',
    },
    {
      autoEmail: false,
      type: 'RECEIPT IMPORT QUEUE',
    },
    {
      autoEmail: false,
      type: 'ADVANCED SHIPPING NOTE',
    }
  ];

  displayedwhControlColumns = ['code', 'name'];
  whControlDataSource: SetupOwnerWHControlModel[] = [];
  dummyWHControlModel: SetupOwnerWHControlModel[] = [
    { checked: false, code: 'GEN', name: 'GENERAL WAREHOUSE' },
    { checked: false, code: 'LIQ', name: 'SPIRIT WAREHOUSE' },
    { checked: false, code: 'M01', name: 'MOTHER WAREHOUSE' },
    { checked: false, code: 'EQU', name: 'EQUIPMENT BASED WAREHOUSE' }
  ];


  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private translate: TranslateService,
    private titleService: TitleService,
    private siteTranslateService: SiteTranslateService,
    private notification: NotificationService
  ) {
    this.createDataOwnerForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.setupOwner');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });

    this.documentDataSource = this.dummyDocumentModel;
    this.whControlDataSource = this.dummyWHControlModel;
  }

  ngAfterViewInit() {
    this.setTabHeights();
  }

  setTabHeights() {
    const tabCardBody = document.querySelectorAll(
      'mat-tab-group#setupOwnerDataTab mat-tab-body'
    );
    if (!tabCardBody) return;
    const maxHeight = Math.max(
      ...Array.from(tabCardBody).map((elm: any) => elm.clientHeight)
    );
    tabCardBody.forEach((itm) => {
      itm.setAttribute('style', `height:${maxHeight}px;`);
    });
  }

  createDataOwnerForm() {
    this.dataOwnerForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(patternsHelper.alphanumeric)]],
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      shortName: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      type: [
        '',
        [
          Validators.required
        ]
      ],
      address1: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      address2: [
        '',
        [
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      address3: [
        '',
        [
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      address4: ['', [Validators.maxLength(100), Validators.pattern(patternsHelper.alphanumeric)]],
      place: ['', [Validators.maxLength(100), Validators.pattern(patternsHelper.alphanumeric)]],
      zip: ['', [Validators.maxLength(50), Validators.pattern(patternsHelper.alphanumeric)]],
      telephone: ['', [Validators.maxLength(30), Validators.pattern(patternsHelper.alphanumeric)]],
      fax: ['', [Validators.maxLength(30), Validators.pattern(patternsHelper.alphanumeric)]],
      email: ['', [Validators.maxLength(500), Validators.pattern(patternsHelper.emails)]],
      blockCustomer : '',
      actAsCustomer : ''
    });
  }

  get dataOwnerControls() {
    return this.dataOwnerForm.controls;
  }


  saveOwnerData() { }
  deleteOwnerData() { }

  resetOwnerDataForm() {
    this.dataOwnerForm.reset();
  }
}
