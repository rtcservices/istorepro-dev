import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup, _MatTabGroupBase } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';

import { patternsHelper } from '../../../helpers/patterns.helper';
import * as fromTabsHelper from '../../../helpers/tabs.helper';

import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';

import {
  SetupOwnerEmailModel,
  SetupOwnerModel,
  SetupOwnerShipToModel,
  SetupOwnerWHControlModel
} from '../models/setup-owner.model';

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

  ownerType = 'customer';

  dataOwnerForm!: FormGroup;
  searchItemForm!: FormGroup;
  displayedDocumentColumns = ['type', 'autoEmail'];
  documentDataSource: SetupOwnerEmailModel[] = [];
  dummyDocumentModel: SetupOwnerEmailModel[] = [
    {
      autoEmail: false,
      type: 'TEMPORARY RECEIPT NOTICE'
    },
    {
      autoEmail: true,
      type: 'GOODS RECEIPT NOTICE'
    },
    {
      autoEmail: false,
      type: 'RECEIPT IMPORT QUEUE'
    },
    {
      autoEmail: false,
      type: 'ADVANCED SHIPPING NOTE'
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

  displayedColumns = ['code', 'description', 'shortName'];

  displayedshipToColumns = ['code', 'name'];
  shipToDataSource: SetupOwnerShipToModel[] = [];
  dummyshipToModel: SetupOwnerShipToModel[] = [
    { address: 'GEN', shipToCode: 'GEN', shipToName: 'GENERAL WAREHOUSE' },
    { address: 'GEN', shipToCode: 'LIQ', shipToName: 'SPIRIT WAREHOUSE' },
    { address: 'GEN', shipToCode: 'M01', shipToName: 'MOTHER WAREHOUSE' },
    {
      address: 'GEN',
      shipToCode: 'EQU',
      shipToName: 'EQUIPMENT BASED WAREHOUSE'
    }
  ];

  searchDataSource: SetupOwnerModel[] = [];
  dummySearchModel: SetupOwnerModel[] = [
    {
      code: 'example1',
      description: 'this is dummy decription',
      shortName: 'normal',
      place: 'normalnormalnormal',
      telephone: '121212',
      blocked: true
    },
    {
      code: 'example2',
      description: 'this is dummy decription',
      shortName: 'normal',
      place: 'normalnormalnormal',
      telephone: '121212',
      blocked: false
    }
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
    this.createSearchItemForm();
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
    this.shipToDataSource = this.dummyshipToModel;
    this.searchDataSource = this.dummySearchModel;
  }

  ngAfterViewInit() {
    fromTabsHelper.setTabHeights(
      'mat-tab-group#setupOwnerDataTab mat-tab-body',
      8
    );
  }

  createDataOwnerForm() {
    this.dataOwnerForm = this.fb.group({
      code: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
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
      type: ['', [Validators.required]],
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
      address4: [
        '',
        [
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      place: [
        '',
        [
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
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
        [Validators.maxLength(500), Validators.pattern(patternsHelper.emails)]
      ],
      blockCustomer: '',
      actAsCustomer: '',
      shipToCode: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      shipToName: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      shipToaddress1: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      shipToaddress2: [
        '',
        [
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      shipToaddress3: [
        '',
        [
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      shipToaddress4: [
        '',
        [
          Validators.maxLength(100),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      shipTozip: [
        '',
        [
          Validators.maxLength(50),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      shipTotelephone: [
        '',
        [
          Validators.maxLength(30),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      shipTofax: [
        '',
        [
          Validators.maxLength(30),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      shipToemail: [
        '',
        [Validators.maxLength(500), Validators.pattern(patternsHelper.emails)]
      ]
    });
  }

  get dataOwnerControls() {
    return this.dataOwnerForm.controls;
  }

  saveOwnerData() {}
  deleteOwnerData() {}

  resetOwnerDataForm() {
    this.dataOwnerForm.reset();
  }

  // Serch related function

  createSearchItemForm() {
    this.searchItemForm = this.fb.group({
      code: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      description: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      shortName: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      place: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      telephone: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      blocked: ['']
    });
  }

  get searchItemFormControls() {
    return this.searchItemForm.controls;
  }

  onSearchOwnerSubmit() {
    if (!this.searchItemForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const code: string = this.searchItemForm.get('code')?.value || '';
    const description: string =
      this.searchItemForm.get('description')?.value || '';
    const shortName: string = this.searchItemForm.get('shortName')?.value || '';
    const place: string = this.searchItemForm.get('place')?.value || '';
    const telephone: string = this.searchItemForm.get('telephone')?.value || '';
    const blocked: string = this.searchItemForm.get('blocked')?.value || '';
    if (
      code.trim() === '' &&
      description.trim() === '' &&
      shortName.trim() === '' &&
      place.trim() === '' &&
      telephone.trim() === '' &&
      blocked.trim() === ''
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

  searchItemClick(event: any, item: SetupOwnerModel, idx: number) {
    const tabGroup = this.setupOwnerTab;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
    tabGroup.selectedIndex = 0;
  }

  resetOwnerSearchForm() {
    this.searchItemForm.reset();
    this.searchDataSource = [];
  }
  changeOwnerType(evt: any) {
    console.log(evt);
    this.ownerType = evt.value;
  }
}
