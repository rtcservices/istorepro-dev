import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { TitleService } from '../../../services/title.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from '../../../services/site-translate.service';

import { BaseZoneModel } from '../models/base-zone.model'

@Component({
  selector: 'ibe-base-zone',
  templateUrl: './base-zone.component.html',
  styleUrls: ['./base-zone.component.scss']
})
export class BaseZoneComponent implements OnInit {

  displayedZoneColumns = ['code', 'description'];

  zoneModel!: BaseZoneModel;

  zoneDataSource: BaseZoneModel[] = [];
  dummyZoneModel: BaseZoneModel[] = [
    { code: 'ZN 1', description: 'Zone 1' },
    { code: 'ZN 2', description: 'Zone 2' },
    { code: 'ZN 3', description: 'Zone 3' },
    { code: 'ZN 4', description: 'Zone 4' },
  ];


  formErrorTranslated = '';
  filterErrorTranslated = '';

  constructor(private loader: LoaderService,
    private translate: TranslateService,
    private titleService: TitleService,
    private siteTranslateService: SiteTranslateService,
    private notification: NotificationService) {
    this.zoneDataSource = this.dummyZoneModel;
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.setupWarehouse');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

}
