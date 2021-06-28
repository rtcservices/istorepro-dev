import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { LoaderService } from '../../../services/loader.service';
import { patternsHelper } from '../../../helpers/patterns.helper';
import { SetupCompanyModel } from '../models/setup-company.model';
import { MatTabGroup } from '@angular/material/tabs';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'rtc-setup-company',
  templateUrl: './setup-company.component.html',
  styleUrls: ['./setup-company.component.scss']
})
export class SetupCompanyComponent implements OnInit {

  @ViewChild("setupCompanyTab", { static: false }) setupCompanyTab!: MatTabGroup;
  searchCompanyForm! : FormGroup;
  dataSource: MatTableDataSource<SetupCompanyModel>;

  displayedColumns = [
    'companyCode',
    'companyName',
    'action'
  ];

  searchModel: SetupCompanyModel[] = [
    { companyCode: 'Code 1', companyName: 'Name 1' },
    { companyCode: 'Code 2', companyName: 'Name 2' }
  ];

  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private titleService: TitleService){
    this.dataSource = new MatTableDataSource(this.searchModel);
    this.createSearchCompanyForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.setupCompany');
    this.loader.show();

    setTimeout(() => {this.loader.hide()}, 100);
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

  onViewCompany(event: any, item: FormGroup, idx: number) {

  }

}
