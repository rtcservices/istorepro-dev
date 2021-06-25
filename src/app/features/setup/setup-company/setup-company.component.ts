import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { patternsHelper } from '../../../helpers/patterns.helper';
import { SetupCompanyModel } from '../models/setup-company.model';

@Component({
  selector: 'rtc-setup-company',
  templateUrl: './setup-company.component.html',
  styleUrls: ['./setup-company.component.scss']
})
export class SetupCompanyComponent implements OnInit {

  searchCompanyForm : FormGroup;
  displayedColumns = [
    'companyCode',
    'companyName',
    'action'
  ];

  dataSource!: MatTableDataSource<SetupCompanyModel>;
  model: SetupCompanyModel[] = [
    { companyCode: 'Code 1', companyName: 'Name 1' },
    { companyCode: 'Code 2', companyName: 'Name 2' }
  ];

  constructor(private fb: FormBuilder){
    this.searchCompanyForm = fb.group({
      companyCode : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      companyName : ['', [Validators.pattern(patternsHelper.alphanumeric)]],
    });
    this.dataSource = new MatTableDataSource(this.model);
  }

  ngOnInit(): void {
  }
  get searchCompanyFormControls() {
    return this.searchCompanyForm.controls;
  }
  onViewCompany(event: any, item: FormGroup, idx: number) {

  }

}
