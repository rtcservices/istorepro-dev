import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../../../services/loader.service';
import { SetupWarehouseModel } from '../models/setup-warehouse.model';
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

  formErrorTranslated = '';
  filterErrorTranslated = '';

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
  }

  CreateDataWarehouseForm()
  {
    this.dataWarehouseForm = this.fb.group({
      companyCode: '',
      companyName: '',
      code: '',
      description: '',
      address1: '',
      address2: '',
      address3: '',
      address4: '',
      zip: '',
      telephone: '',
      fax: '',
      email: '',
      id: '',
      blockAlertDays: '',
      receiptDeliveryAlertDays: '',
      receiptBackDateLimit : '',
      deliveryBackDateLimit : '',
    });
  }

  get dataWarehouseControls() {
    return this.dataWarehouseForm.controls;
  }
}
