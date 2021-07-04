import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../../../services/loader.service';
import { BaseLocationCapacityModel, BaseLocationModel, BaseLocationSearchModel } from '../models/base-location.model';

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
  ) { }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.baseLocation');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

  createDataLocationForm() {
    this.dataLocationForm = this.fb.group({
      warehouse: ['',
        [
          Validators.required,
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      row: [
        '', [
          Validators.required,
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ],
      unit: [
        '', [
          Validators.required,
          Validators.pattern(patternsHelper.alphanumeric)
        ]
      ]
    });
  }

  get dataLocationControls() {
    return this.dataLocationForm.controls;
  }
}
