import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { TitleService } from '../../../services/title.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from '../../../services/site-translate.service';

import{BaseStorageTypeModel} from '../models/base-storage-type.model'

@Component({
  selector: 'ibe-base-storage-type',
  templateUrl: './base-storage-type.component.html',
  styleUrls: ['./base-storage-type.component.scss']
})
export class BaseStorageTypeComponent implements OnInit {

  displayedStorageTypeColumns = ['code', 'description'];

  storageTypeModel!: BaseStorageTypeModel;

  storageTypeDataSource: BaseStorageTypeModel[] = [];
  dummyStorageTypeModel: BaseStorageTypeModel[] = [
    { code : 'ST 1', description : 'Storage Type 1'},
    { code : 'ST 2', description : 'Storage Type 2'},
    { code : 'ST 3', description : 'Storage Type 3'},
    { code : 'ST 4', description : 'Storage Type 4'},
  ];


  formErrorTranslated = '';
  filterErrorTranslated = '';

  constructor(
    private loader: LoaderService,
    private translate: TranslateService,
    private titleService: TitleService,
    private siteTranslateService: SiteTranslateService,
    private notification: NotificationService) { 
      this.storageTypeDataSource = this.dummyStorageTypeModel;
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
