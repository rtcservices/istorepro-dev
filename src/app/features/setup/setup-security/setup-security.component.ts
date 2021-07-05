import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { MatTabGroup } from '@angular/material/tabs';

import { patternsHelper } from '../../../helpers/patterns.helper';
import { SelectItemModel } from '../../../models/select-item.model';
import {
  PrevilegeNode,
  FlattenedPrevilegeNode
} from '../models/setup-security.model';
@Component({
  selector: 'ibe-setup-security',
  templateUrl: './setup-security.component.html',
  styleUrls: ['./setup-security.component.scss']
})
export class SetupSecurityComponent implements OnInit, AfterViewInit {
  //#region "Data Tab Variables"
  @ViewChild('setupSecurityDataTab', { static: false })
  setupSecurityDataTab!: MatTabGroup;
  dataSetupSecurityForm!: FormGroup;
  //#endregion

  //#region "User Tab Variables"

  //#endregion

  //#region "Access Tab Variables"
  WAREHOUSES_DATA: SelectItemModel[] = [
    { text: '10', value: '10' },
    { text: '12', value: '12' },
    { text: '19', value: '19' },
    { text: '19', value: '19' },
    { text: '20', value: '20' },
    { text: '30', value: '30' },
    { text: '30', value: '30' },
    { text: '30', value: '30' }
  ];
  displayedWarehouseColumns: string[] = ['select', 'text'];
  warehousesDataSource = new MatTableDataSource<SelectItemModel>(
    this.WAREHOUSES_DATA
  );
  warehouseSelection = new SelectionModel<SelectItemModel>(true, []);
  //#endregion

  //#region "Previleges Tab Variables"
  availablePrevileges: PrevilegeNode[] = [];
  allocatedPrevileges: PrevilegeNode[] = [];
  //#endregion

  //#region "Search Tab Variables"
  searchSetupSecurityForm!: FormGroup;
  searchDataSource: SelectItemModel[] = [
    { text: '10', value: '10' },
    { text: '12', value: '12' },
    { text: '19', value: '19' },
    { text: '19', value: '19' },
    { text: '20', value: '20' },
    { text: '30', value: '30' },
    { text: '30', value: '30' },
    { text: '30', value: '30' }
  ];
  displayedSearchColumns: string[] = ['text'];
  //#endregion

  //#region "Constructor and Page Events"
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createDataSetupSecurityForm();
    this.createSearchSetupSecurityForm();
  }

  ngAfterViewInit() {
    this.setTabHeights();
  }
  //#endregion

  //#region "Data Tab"
  onDataSetupSecuritySubmit() {}

  saveSecurityUserData() {}

  deleteSecurityUserData() {}

  resetSecurityUserDataForm() {
    this.dataSetupSecurityForm.reset();
  }
  //#endregion

  //#region "User Tab"
  createDataSetupSecurityForm() {
    this.dataSetupSecurityForm = this.fb.group(
      {
        loginName: '',
        license: ['', [Validators.required]],
        expiryOn: '',
        fullName: [
          '',
          [
            Validators.maxLength(100),
            Validators.pattern(patternsHelper.alphanumeric)
          ]
        ],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        designation: [
          '',
          [
            Validators.required,
            Validators.maxLength(50),
            Validators.pattern(patternsHelper.alphanumeric)
          ]
        ],
        department: [
          '',
          [
            Validators.maxLength(50),
            Validators.pattern(patternsHelper.alphanumeric)
          ]
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.maxLength(500),
            Validators.pattern(patternsHelper.emails)
          ]
        ],
        telephone: [
          '',
          [
            Validators.maxLength(30),
            Validators.pattern(patternsHelper.alphanumeric)
          ]
        ],
        suspended: false,
        suspendFrom: '',
        suspendTo: '',
        lastSuspended: '',
        lastRevoked: ''
      },
      this.passwordsMatchValidator
    );
  }

  get dataSetupSecurityFormControls() {
    return this.dataSetupSecurityForm.controls;
  }

  onStrengthChanged(event: any) {}
  //#endregion

  //#region "Access Tab"
  isAllWarehouseSelected() {
    const numSelected = this.warehouseSelection.selected.length;
    const numRows = this.warehousesDataSource.data.length;
    return numSelected === numRows;
  }

  warehouseMasterToggle() {
    if (this.isAllWarehouseSelected()) {
      this.warehouseSelection.clear();
      return;
    }

    this.warehouseSelection.select(...this.warehousesDataSource.data);
  }

  warehouseCheckboxLabel(row?: SelectItemModel): string {
    if (!row) {
      return `${this.isAllWarehouseSelected() ? 'deselect' : 'select'} all`;
    }
    return `${
      this.warehouseSelection.isSelected(row) ? 'deselect' : 'select'
    } row ${row.value + 1}`;
  }
  //#endregion

  //#region "Previleges Tab"
  createAvailablePrevilegeTree() {
    const saveText = 'Save';
    const deleteText = 'Delete';
    const viewText = 'View';

    const setupPrevileges: PrevilegeNode = {
      id: 11,
      name: 'Setup',
      parentId: 1,
      children: [
        {
          id: 111,
          name: 'Company',
          parentId: 11,
          children: [
            { id: 1111, parentId: 111, name: saveText },
            { id: 1112, parentId: 111, name: deleteText },
            { id: 1113, parentId: 111, name: viewText }
          ]
        },
        {
          id: 112,
          name: 'Warehouse',
          parentId: 11,
          children: [
            { id: 1121, parentId: 112, name: saveText },
            { id: 1122, parentId: 112, name: deleteText },
            { id: 1123, parentId: 112, name: viewText }
          ]
        },
        {
          id: 113,
          name: 'Owner',
          parentId: 11,
          children: [
            { id: 1131, parentId: 113, name: saveText },
            { id: 1132, parentId: 113, name: deleteText },
            { id: 1133, parentId: 113, name: viewText }
          ]
        },
        {
          id: 114,
          name: 'Security',
          parentId: 11,
          children: [
            { id: 1141, parentId: 114, name: saveText },
            { id: 1142, parentId: 114, name: deleteText },
            { id: 1143, parentId: 114, name: viewText }
          ]
        }
      ]
    };
    const basePrevileges: PrevilegeNode = {
      id: 12,
      name: 'Base',
      parentId: 1,
      children: [
        {
          id: 121,
          name: 'Item Type',
          parentId: 12,
          children: [
            { id: 1211, parentId: 121, name: saveText },
            { id: 1212, parentId: 121, name: deleteText },
            { id: 1213, parentId: 121, name: viewText }
          ]
        },
        {
          id: 122,
          name: 'Item',
          parentId: 12,
          children: [
            { id: 1221, parentId: 122, name: saveText },
            { id: 1222, parentId: 122, name: deleteText },
            { id: 1223, parentId: 122, name: viewText }
          ]
        },
        {
          id: 123,
          name: 'Storage Type',
          parentId: 12,
          children: [
            { id: 1231, parentId: 123, name: saveText },
            { id: 1232, parentId: 123, name: deleteText },
            { id: 1233, parentId: 123, name: viewText }
          ]
        },
        {
          id: 124,
          name: 'Zone',
          parentId: 12,
          children: [
            { id: 1241, parentId: 124, name: saveText },
            { id: 1242, parentId: 124, name: deleteText },
            { id: 1243, parentId: 124, name: viewText }
          ]
        },
        {
          id: 125,
          name: 'Storage Type',
          parentId: 12,
          children: [
            { id: 1251, parentId: 125, name: saveText },
            { id: 1252, parentId: 125, name: deleteText },
            { id: 1253, parentId: 125, name: viewText }
          ]
        },
        {
          id: 126,
          name: 'Reason',
          parentId: 12,
          children: [
            { id: 1261, parentId: 126, name: saveText },
            { id: 1262, parentId: 126, name: deleteText },
            { id: 1263, parentId: 126, name: viewText }
          ]
        }
      ]
    };

    this.availablePrevileges = [
      {
        id: 1,
        name: 'Functions',
        children: [setupPrevileges, basePrevileges]
      }
    ];
  }
  //#endregion

  //#region "Search Tab"
  createSearchSetupSecurityForm() {
    this.searchSetupSecurityForm = this.fb.group({
      loginName: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      fullName: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      suspended: ''
    });
  }

  get searchSetupSecurityFormControls() {
    return this.searchSetupSecurityForm.controls;
  }
  onSearchSetupSecuritySubmit() {}

  resetSetupSecuritySearchForm() {
    this.searchSetupSecurityForm.reset();
    this.searchDataSource = [];
  }
  //#endregion

  //#region "Private Functions"

  private setTabHeights() {
    const tabCardBody = document.querySelectorAll(
      'mat-tab-group#setupSecurityDataTab mat-tab-body'
    );
    if (!tabCardBody) return;
    const maxHeight = Math.max(
      ...Array.from(tabCardBody).map((elm: any) => elm.clientHeight)
    );
    tabCardBody.forEach((itm) => {
      itm.setAttribute('style', `height:${maxHeight}px;`);
    });
  }
  private passwordsMatchValidator(form: FormGroup) {
    if (form.get('password') && form.get('confirmPassword')) {
      return form.get('password')?.value === form.get('confirmPassword')?.value
        ? null
        : { mismatch: true };
    }
    return null;
  }
  //#endregion
}
