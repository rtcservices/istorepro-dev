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

  searchLocationForm!: FormGroup;
  searchLocationDataSource: BaseLocationSearchModel[] = [];
  dummyLocationSearchModel: BaseLocationSearchModel[] = [
    { warehouse: 'Warehosue 1', row: 'Row 1', unit: 'Unit 1', location : 'Location 1', description: 'Gemini Software', status : "Status 1", nature : "Nature 1" },
    { warehouse: 'Warehosue 2', row: 'Row 2', unit: 'Unit 2', location : 'Location 2', description: 'Gemini Software', status : "Status 2", nature : "Nature 2" },
    { warehouse: 'Warehosue 3', row: 'Row 3', unit: 'Unit 3', location : 'Location 3', description: 'Gemini Software', status : "Status 3", nature : "Nature 3" },
    { warehouse: 'Warehosue 4', row: 'Row 4', unit: 'Unit 4', location : 'Location 4', description: 'Gemini Software', status : "Status 4", nature : "Nature 4" },
    { warehouse: 'Warehosue 5', row: 'Row 5', unit: 'Unit 5', location : 'Location 5', description: 'Gemini Software', status : "Status 5", nature : "Nature 5" }
  ];
  displayedLocationColumns = ['warehouse', 'row', 'unit', 'location', 'description', 'status', 'nature'];

  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService
  ) {
    this.createDataLocationForm();
    this.createSearchLocationForm();
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
      location: '',
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

  createSearchLocationForm() {
    this.searchLocationForm = this.fb.group({
      warehouse: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      row: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      unit: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      level: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      location: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      description: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      scanCode: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      storageType: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      walkSequence: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      floorSequence: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      nature: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      storageStatus: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      zone: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      freeze: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      reworkArea: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      audit: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      excludeFromPlanning: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      excludeFromAutoAllocation: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
    });
  }

  onSearchLocationSubmit() {
    if (!this.searchLocationForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const code: string =
      this.searchLocationForm.get('code')?.value || '';
    const description: string =
      this.searchLocationForm.get('description')?.value || '';
    if (code.trim() === '' && description.trim() === '') {
      this.notification.error(this.filterErrorTranslated);
      return;
    } else {
      this.loader.show();
      setTimeout(() => {
        this.searchLocationDataSource = [...this.dummyLocationSearchModel];
        this.loader.hide();
      }, 500);
    }
  }

  get searchLocationFormControls() {
    return this.searchLocationForm.controls;
  }

  resetLocationSearchForm() {
    this.searchLocationForm.reset();
    this.searchLocationDataSource = [];
  }
}
