import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';

import { patternsHelper } from '../../../helpers/patterns.helper';
import { SetupCompanyModel } from '../models/setup-company.model';

import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'ibe-setup-company',
  templateUrl: './setup-company.component.html',
  styleUrls: ['./setup-company.component.scss']
})
export class SetupCompanyComponent implements OnInit {

  @ViewChild("setupCompanyTab", { static: false }) setupCompanyTab!: MatTabGroup;
  searchCompanyForm! : FormGroup;

  searchDataSource: SetupCompanyModel[] = [];
  dummySearchModel: SetupCompanyModel[] = [
    { companyCode: 'GEM1234', companyName: 'Gemini Software' },
    { companyCode: 'INFY1234', companyName: 'Infosys' },
    { companyCode: 'CAP1234', companyName: 'Cap Gemini' },
    { companyCode: 'TCS1234', companyName: 'Tata Consultancy Services' },
    { companyCode: 'CTS1234', companyName: 'Cognizant Technologies' },
    { companyCode: 'EY1234', companyName: 'Ernst & Young' },
    { companyCode: 'MS1234', companyName: 'Microsoft' }
  ];

  dataCompanyForm!: FormGroup;
  dummyDataModel: SetupCompanyModel = { companyCode: 'GEM1234', companyName: 'Gemini Software' };
  companyDataModel!: SetupCompanyModel;

  displayedColumns = [
    'companyCode',
    'companyName'
  ];

  formErrorTranslated = '';
  codeOrNameErrorTranslated = '';
  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService){
      this.createDataCompanyForm();
      this.createSearchCompanyForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.setupCompany');
    const language = this.siteTranslateService.defaultLanguage;
      this.translate.use(language).subscribe((res) => {
        this.formErrorTranslated = this.translate.instant(
          'error.form'
        );
        this.codeOrNameErrorTranslated = this.translate.instant(
          'setup.company.codeOrNameError'
        );
      });
    this.companyDataModel = this.dummyDataModel;
  }
  createDataCompanyForm() {
    this.dataCompanyForm = this.fb.group({
      companyCode : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      companyName : ['', [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]],
      address1 : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      address2 : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      address3 : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      address4 : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      telephone : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      fax : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      sector : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      email : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      contactPerson : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      website : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      suspendOperation : false,
      companyLogo : '',
    });
  }
  get dataCompanyFormControls() {
    return this.dataCompanyForm.controls;
  }

  createSearchCompanyForm() {
    this.searchCompanyForm = this.fb.group({
      companyCode : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      companyName : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
    });
  }

  get searchCompanyFormControls() {
    return this.searchCompanyForm.controls;
  }

  searchItemClick() {
    const tabGroup = this.setupCompanyTab;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
    tabGroup.selectedIndex = 0;
  }
  onDataCompanySubmit() {

  }
  onSearchCompanySubmit() {

    if (!this.searchCompanyForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const companyCode:string = this.searchCompanyForm.get('companyCode')?.value || '';
    const companyName:string = this.searchCompanyForm.get('companyName')?.value || '';
    if(companyCode.trim() === '' && companyName.trim() === '') {
      this.notification.error(this.codeOrNameErrorTranslated);
      return;
    } else {
      this.loader.show();
      setTimeout(() => {
        this.searchDataSource = [...this.dummySearchModel];
        this.loader.hide();
      }, 1500);
    }
  }
  clearSearch() {
    this.createSearchCompanyForm();
    this.searchDataSource = [];
  }

  onViewCompany(event: any, item: SetupCompanyModel, idx: number) {
    console.log(item);
  }

  saveCompanyData(){

  }
  deleteCompanyData(){

  }
  clearCompanyData(){

  }
}
