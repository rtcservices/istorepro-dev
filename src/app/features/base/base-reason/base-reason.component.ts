import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { TitleService } from '../../../services/title.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from '../../../services/site-translate.service';

import { BaseReasonModel } from '../models/base-reason.model'

@Component({
  selector: 'ibe-base-reason',
  templateUrl: './base-reason.component.html',
  styleUrls: ['./base-reason.component.scss']
})
export class BaseReasonComponent implements OnInit {

  displayedReasonColumns = ['code', 'description'];

  reasonModel!: BaseReasonModel;

  reasonDataSource: BaseReasonModel[] = [];
  dummyReasonModel: BaseReasonModel[] = [
    { code: 'R 1', description: 'Reason 1', type: 'COMMON' },
    { code: 'R 2', description: 'Reason 2', type: 'COMMON' },
    { code: 'R 3', description: 'Reason 3', type: 'COMMON' },
    { code: 'R 4', description: 'Reason 4', type: 'COMMON' },
  ];

  formErrorTranslated = '';
  filterErrorTranslated = '';

  constructor(
    private loader: LoaderService,
    private translate: TranslateService,
    private titleService: TitleService,
    private siteTranslateService: SiteTranslateService,
    private notification: NotificationService
    ) {
      this.reasonDataSource = this.dummyReasonModel;
     }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.baseReason');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }
}
