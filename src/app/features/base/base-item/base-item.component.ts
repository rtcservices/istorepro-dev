import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup, _MatTabGroupBase } from '@angular/material/tabs';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../../../services/loader.service';
import { patternsHelper } from '../../../helpers/patterns.helper';
import { SiteTranslateService } from 'src/app/services/site-translate.service';
import { BaseItemInventoryAlertModel, BaseItemMatrixModel, BaseItemWhControlModel } from '../models/base-item.model';
import {MatDialog} from '@angular/material/dialog';


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
  formErrorTranslated = '';
  filterErrorTranslated = '';

  whControlDataSource: BaseItemWhControlModel[] = [];
  dummyWHControlModel: BaseItemWhControlModel[] = [
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },
    { checked: false, code: '1008', name: 'NIPPON PAINT (INDIA) PRIVATE LTD', customers: false, vendors: false, sku: "" },

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
    },
  ];

  MatrixDataSource: BaseItemMatrixModel[] = [];
  dummyMatrixModel: BaseItemMatrixModel[] = [
    {
      from: { value: "", unit: "" },
      to: { unit: "" ,weight: "", length: "", breadth: "", height: "", volume: "", value:"" },
     
    },
    

  ];

  constructor(private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    public dialog: MatDialog    
  ) { this.createDataItemForm(); }

  ngOnInit(): void {
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
      'mat-tab-group#setupWarehouseDataTab mat-tab-body'
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
        [Validators.maxLength(50), Validators.required, Validators.pattern(patternsHelper.name)]
      ],
      description: [
        '',
        [Validators.maxLength(100),
        Validators.required,
        Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      hscode: [
        '',
        [Validators.maxLength(10), Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      itemType: [
        '',
        [Validators.maxLength(50), Validators.required]
      ],
      scanType: [
        '',
        [Validators.maxLength(10)]
      ],
      scanCode: [
        '',
        [Validators.maxLength(50), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      validateStorageType: [''],
      inventoryAlert: [''],
      inactive: [''],
      unit: [
        '',
        [
          Validators.required,
          Validators.maxLength(10)
        ]
      ],
      unitWeight: [
        '',
        [
          Validators.maxLength(50),
          Validators.pattern(patternsHelper.telephone)
        ]
      ],
      dimensions: [''],
      length: ['',
        [
          Validators.maxLength(5),
          Validators.pattern(patternsHelper.telephone)
        ]],
      breadth: ['',
        [
          Validators.maxLength(5),
          Validators.pattern(patternsHelper.telephone)
        ]],
      height: ['',
        [
          Validators.maxLength(5),
          Validators.pattern(patternsHelper.telephone)
        ]],
      volume: ['',
        [
          Validators.maxLength(6),
          Validators.pattern(patternsHelper.telephone)
        ]],
      shelfLife: ['',
        [
          Validators.maxLength(5),
          Validators.pattern(patternsHelper.telephone)
        ]],
      pickOption: ['',
        [
          Validators.maxLength(10)
        ]],
    });
  }

  get dataItemFormControls() {
    return this.dataItemForm.controls;
  }



  onDataItemSubmit() { }


  openDialog(stpref:any) {
    this.dialog.open(stpref, {
      width: '600px'
    });
  }

}
