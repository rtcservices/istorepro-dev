import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { MatTabGroup, _MatTabGroupBase } from '@angular/material/tabs';
import { TranslateService } from '@ngx-translate/core';

import {
  BaseItemInventoryAlertModel,
  BaseItemMatrixModel,
  BaseItemModel,
  BaseItemWhControlModel
} from '../models/base-item.model';
import { patternsHelper } from '../../../helpers/patterns.helper';

import { LoaderService } from '../../../services/loader.service';
import { SiteTranslateService } from 'src/app/services/site-translate.service';
import { NotificationService } from '../../../services/notification.service';
import { TitleService } from '../../../services/title.service';
import { BiOwnerDialogComponent } from './dialogs/bi-owner-dialog/bi-owner-dialog.component';
import { BiStprefDialogComponent } from './dialogs/bi-stpref-dialog/stpref-dialog.component';

@Component({
  selector: 'ibe-base-item',
  templateUrl: './base-item.component.html',
  styleUrls: ['./base-item.component.scss']
})
export class BaseItemComponent implements OnInit {

  @ViewChild('baseItemTab', { static: false })
  baseItemTab!: MatTabGroup;
  @ViewChild('baseItemDataTab', { static: false })
  baseItemDataTab!: MatTabGroup;
  dataItemForm!: FormGroup;
  searchItemForm!: FormGroup;
  dataItemStForm!: FormGroup;
  formErrorTranslated = '';
  filterErrorTranslated = '';

  searchDataSource: BaseItemModel[] = [];
  dummySearchModel: BaseItemModel[] = [
    {
      item: 'dummyc',
      description: 'this is dummy decription',
      itemType: 'normal',
      scanCode: '123123123',
      ownerCode: '121212',
      sku: 'asd123',
      validateStorageType: true,
      inventoryAlert: true,
      inactive: true,
      parent: true,
      warehouse: true,
      instock: true
    }
  ];

  displayedColumns = [
    'item',
    'description',
    'itemType',
    'sku',
    'inactive',
    'instock'
  ];

  whControlDataSource: BaseItemWhControlModel[] = [];
  dummyWHControlModel: BaseItemWhControlModel[] = [
    {
      checked: false,
      code: 'GEN',
      name: 'GENERAL WAREHOUSE',
      customers: false,
      vendors: false,
      sku: ''
    },
    {
      checked: false,
      code: 'LIQ',
      name: 'SPIRIT WAREHOUSE',
      customers: false,
      vendors: false,
      sku: ''
    },
    {
      checked: false,
      code: 'M01',
      name: 'MOTHER WAREHOUSE',
      customers: false,
      vendors: false,
      sku: ''
    },
    {
      checked: false,
      code: 'EQU',
      name: 'EQUIPMENT BASED WAREHOUSE',
      customers: false,
      vendors: false,
      sku: ''
    }
  ];

  InventoryAlertDataSource: BaseItemInventoryAlertModel[] = [];
  dummyInventoryAlertModel: BaseItemInventoryAlertModel[] = [
    {
      warehouse: '',
      description: '',
      min: '',
      reorder: '',
      max: '',
      lastalert: ''
    }
  ];

  MatrixDataSource: BaseItemMatrixModel[] = [];
  dummyMatrixModel: BaseItemMatrixModel[] = [
    {
      from: { value: '', unit: '' },
      to: {
        unit: '',
        weight: '',
        length: '',
        breadth: '',
        height: '',
        volume: '',
        value: ''
      }
    }
  ];

  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    public dialog: MatDialog,
    private notification: NotificationService
  ) {
    this.createDataItemForm();
    this.createSearchItemForm();
    this.createDataItemStForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.baseItem');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
    this.whControlDataSource = this.dummyWHControlModel;
    this.InventoryAlertDataSource = this.dummyInventoryAlertModel;
    this.MatrixDataSource = this.dummyMatrixModel;
  }

  ngAfterViewInit() {
    this.setTabHeights();
  }

  setTabHeights() {
    const tabCardBody = document.querySelectorAll(
      'mat-tab-group#baseItemdataTab mat-tab-body'
    );
    if (!tabCardBody) return;
    const maxHeight = Math.max(
      ...Array.from(tabCardBody).map((elm: any) => elm.clientHeight)
    );
    tabCardBody.forEach((itm) => {
      itm.setAttribute('style', `height:${maxHeight}px;`);
    });
  }

  createDataItemForm() {
    this.dataItemForm = this.fb.group({
      item: [
        '',
        [
          Validators.maxLength(50),
          Validators.required,
          Validators.pattern(patternsHelper.name)
        ]
      ],
      description: [
        '',
        [
          Validators.maxLength(100),
          Validators.required,
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      hscode: [
        '',
        [
          Validators.maxLength(10),
          Validators.required,
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      itemType: ['', [Validators.maxLength(50), Validators.required]],
      scanType: ['', [Validators.maxLength(10)]],
      scanCode: [
        '',
        [
          Validators.maxLength(50),
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      validateStorageType: [''],
      inventoryAlert: [''],
      inactive: [''],
      unit: ['', [Validators.required, Validators.maxLength(10)]],
      unitWeight: [
        '',
        [Validators.maxLength(50), Validators.pattern(patternsHelper.telephone)]
      ],
      dimensions: [''],
      length: [
        '',
        [Validators.maxLength(5), Validators.pattern(patternsHelper.telephone)]
      ],
      breadth: [
        '',
        [Validators.maxLength(5), Validators.pattern(patternsHelper.telephone)]
      ],
      height: [
        '',
        [Validators.maxLength(5), Validators.pattern(patternsHelper.telephone)]
      ],
      volume: [
        '',
        [Validators.maxLength(6), Validators.pattern(patternsHelper.telephone)]
      ],
      shelfLife: [
        '',
        [Validators.maxLength(5), Validators.pattern(patternsHelper.telephone)]
      ],
      pickOption: ['', [Validators.maxLength(10)]]
    });
  }
  get dataItemFormControls() {
    return this.dataItemForm.controls;
  }


  createDataItemStForm() {
    this.dataItemStForm = this.fb.group({
      warehouse: '',
      item: '',
      exclusiveLocationZone: ''
    });
  }
  get dataItemFormStControls() {
    return this.dataItemStForm.controls;
  }
  onDataItemStSubmit() {}

  resetItemDataStForm() {
    this.dataItemStForm.reset();
  }

  saveItemData() {}

  deleteItemData() {}

  onDataItemSubmit() {}

  resetItemDataForm() {
    this.dataItemForm.reset();
  }

  openownerDialog() {
    this.dialog.open(BiOwnerDialogComponent, {
      width: '800px'
    });
  }

  openstoreDialog() {
    this.dialog.open(BiStprefDialogComponent, {
      width: '800px'
    });
  }
 
  createSearchItemForm() {
    this.searchItemForm = this.fb.group({
      item: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      description: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      itemType: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      scanCode: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      ownerCode: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      sku: [''],
      validateStorageType: [''],
      inventoryAlert: [''],
      inactive: [''],
      parent: [''],
      warehouse: [''],
      instock: ['']
    });
  }

  get searchItemFormControls() {
    return this.searchItemForm.controls;
  }

  onSearchItemSubmit() {
    if (!this.searchItemForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const item: string = this.searchItemForm.get('item')?.value || '';
    const description: string =
      this.searchItemForm.get('description')?.value || '';
    const itemType: string = this.searchItemForm.get('itemType')?.value || '';
    const scanCode: string = this.searchItemForm.get('scanCode')?.value || '';
    const ownerCode: string = this.searchItemForm.get('ownerCode')?.value || '';
    const sku: string = this.searchItemForm.get('sku')?.value || '';
    const validateStorageType: string =
      this.searchItemForm.get('validateStorageType')?.value || '';
    const inventoryAlert: string =
      this.searchItemForm.get('inventoryAlert')?.value || '';
    const inactive: string = this.searchItemForm.get('inactive')?.value || '';
    const parent: string = this.searchItemForm.get('parent')?.value || '';
    const warehouse: string = this.searchItemForm.get('warehouse')?.value || '';
    const instock: string = this.searchItemForm.get('instock')?.value || '';
    if (
      item.trim() === '' &&
      description.trim() === '' &&
      itemType.trim() === '' &&
      scanCode.trim() === '' &&
      ownerCode.trim() === '' &&
      sku.trim() === '' &&
      validateStorageType.trim() === '' &&
      inventoryAlert.trim() === '' &&
      inactive.trim() === '' &&
      parent.trim() === '' &&
      warehouse.trim() === '' &&
      instock.trim() === ''
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

  searchItemClick(event: any, item: BaseItemModel, idx: number) {
    const tabGroup = this.baseItemTab;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
    tabGroup.selectedIndex = 0;
  }

  resetItemSearchForm() {
    this.searchItemForm.reset();
    this.searchDataSource = [];
  }
}
