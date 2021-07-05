import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../../../services/loader.service';
import { BaseLocationModel, BaseLocationSearchModel } from '../models/base-location.model';

import { TitleService } from '../../../services/title.service';
import { SiteTranslateService } from '../../../services/site-translate.service';

import { patternsHelper } from '../../../helpers/patterns.helper';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'ibe-base-location',
  templateUrl: './base-location.component.html',
  styleUrls: ['./base-location.component.scss']
})

export class BaseLocationComponent implements OnInit {
  @ViewChild('baseLocationTab', { static: false })
  baseLocationTab!: MatTabGroup;

  formErrorTranslated = '';
  filterErrorTranslated = '';

  dataLocationForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService
  ) {
    this.createDataLocationForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.baseLocation');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

  ngAfterViewInit() {
    this.setTabHeights();
  }

  setTabHeights() {
    const tabCardBody = document.querySelectorAll(
      'mat-tab-group#baseLocationDataTab mat-tab-body'
    );
    if (!tabCardBody) return;
    const maxHeight = Math.max(
      ...Array.from(tabCardBody).map((elm: any) => elm.clientHeight)
    );
    tabCardBody.forEach((itm) => {
      itm.setAttribute('style', `height:${maxHeight}px;`);
    });
  }

  createDataLocationForm() {
    this.dataLocationForm = this.fb.group({
      warehouse: ['',
        [
          Validators.required,
        ]
      ],
      row: [
        '', [
          Validators.required,
        ]
      ],
      unit: [
        '', [
          Validators.required,
        ]
      ],
      level: [
        '', [
          Validators.required,
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      nature: [
        '', [
          Validators.required,
        ]
      ],
      zone: [
        '', [
          Validators.required,
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      description: [
        '', [
          Validators.required,
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      storageType: [
        '', [
          Validators.required,
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      scanType: '',
      scanCode: '',
      storageStatus: [
        '', [
          Validators.required,
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      freeze: '',
      reworkArea: '',
      walkSequence: [
        '', [
          Validators.required,
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      floorSequence: [
        '', [
          Validators.required,
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      lpnLocation: [
        '', [
          Validators.required,
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      planning: '',
      autoAllocation: '',

      length: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      breadth: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      height: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      volume: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      volumeValidate: '',
      volumeSafePercentage: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      volumeFillPercentage: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      weight: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      weightValidate: '',
      weightSafePercentage: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      weightFillPercentage: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      autoFill: ''
    });
  }

  get dataLocationControls() {
    return this.dataLocationForm.controls;
  }

  saveCompanyData() { }
  deleteCompanyData() { }

  resetCompanyDataForm() {
    this.dataLocationForm.reset();
  }
}
