import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { TitleService } from '../../../services/title.service';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from '../../../services/site-translate.service';

@Component({
  selector: 'ibe-dashboards-mis',
  templateUrl: './dashboards-mis.component.html',
  styleUrls: ['./dashboards-mis.component.scss']
})
export class DashboardsMisComponent implements OnInit {
  MisForm!: FormGroup;
    
  formErrorTranslated = '';
  filterErrorTranslated = '';

  constructor(  private fb: FormBuilder, 
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    public dialog: MatDialog) {
    this.createMisForm()
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.dashboardsMIS');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

  createMisForm() {
    this.MisForm = this.fb.group({
      type: ['']
    });
  }

  get MisFormControls() {
    return this.MisForm.controls;
  }

  onMisFormSubmit() {}

  resetMisForm() {
    this.MisForm.reset();
  }


}
