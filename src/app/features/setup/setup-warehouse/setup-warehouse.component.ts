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

  displayedColumns = ['type', 'prefix', 'currentNo', 'autoEmail'];

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
}
