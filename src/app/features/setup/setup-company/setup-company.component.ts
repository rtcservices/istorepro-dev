import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';

import { patternsHelper } from '../../../helpers/patterns.helper';
import { SetupCompanySearchModel } from '../models/setup-company.model';

import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'ibe-setup-company',
  templateUrl: './setup-company.component.html',
  styleUrls: ['./setup-company.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SetupCompanyComponent implements OnInit {
  @ViewChild('setupCompanyTab', { static: false })
  setupCompanyTab!: MatTabGroup;

  searchCompanyForm!: FormGroup;
  searchDataSource: SetupCompanySearchModel[] = [];
  dummySearchModel: SetupCompanySearchModel[] = [
    { companyCode: 'GEM1234', companyName: 'Gemini Software' },
    { companyCode: 'INFY1234', companyName: 'Infosys' },
    { companyCode: 'CAP1234', companyName: 'Cap Gemini' },
    { companyCode: 'TCS1234', companyName: 'Tata Consultancy Services' },
    { companyCode: 'CTS1234', companyName: 'Cognizant Technologies' },
    { companyCode: 'EY1234', companyName: 'Ernst & Young' },
    { companyCode: 'MS1234', companyName: 'Microsoft' }
  ];

  dataCompanyForm!: FormGroup;
  companyDataModel!: SetupCompanySearchModel;
  dummyDataModel: SetupCompanySearchModel = {
    companyCode: 'GEM1234',
    companyName: 'Gemini Software'
  };

  displayedColumns = ['companyCode', 'companyName'];

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
    private notification: NotificationService
  ) {
    this.createDataCompanyForm();
    this.createSearchCompanyForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.setupCompany');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
    this.companyDataModel = this.dummyDataModel;
  }

  createDataCompanyForm() {
    this.dataCompanyForm = this.fb.group({
      companyCode: 'CODE 2',
      companyName: [
        'KONAMI',
        [Validators.required, Validators.pattern(patternsHelper.name)]
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
      sector: '',
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(500),
          Validators.pattern(patternsHelper.emails)
        ]
      ],
      contactPerson: [
        '',
        [
          Validators.maxLength(50),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      website: [
        '',
        [Validators.maxLength(50), Validators.pattern(patternsHelper.website)]
      ],
      suspendOperation: false,
      companyLogo: '',
      licenseSubscriptionAlert: false,
      licenseAlertLimit: '',
      licenseAlertLimitType: 'days',
      licenseEmail: ['', [Validators.email, Validators.maxLength(100)]]
    });
  }

  get dataCompanyFormControls() {
    return this.dataCompanyForm.controls;
  }

  createSearchCompanyForm() {
    this.searchCompanyForm = this.fb.group({
      companyCode: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      companyName: ['', [Validators.pattern(patternsHelper.alphanumeric)]]
    });
  }

  get searchCompanyFormControls() {
    return this.searchCompanyForm.controls;
  }

  onDataCompanySubmit() {}

  onSearchCompanySubmit() {
    if (!this.searchCompanyForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const companyCode: string =
      this.searchCompanyForm.get('companyCode')?.value || '';
    const companyName: string =
      this.searchCompanyForm.get('companyName')?.value || '';
    if (companyCode.trim() === '' && companyName.trim() === '') {
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

  resetCompanySearchForm() {
    this.searchCompanyForm.reset();
    this.searchDataSource = [];
  }

  searchItemClick(event: any, item: SetupCompanySearchModel, idx: number) {
    const tabGroup = this.setupCompanyTab;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
    tabGroup.selectedIndex = 0;
  }

  saveCompanyData() {}
  deleteCompanyData() {}

  resetCompanyDataForm() {
    this.dataCompanyForm.reset();
  }
}
