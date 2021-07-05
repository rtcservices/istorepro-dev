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
