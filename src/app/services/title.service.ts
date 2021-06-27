import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { SiteTranslateService } from './site-translate.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(
    private title: Title,
    private siteTranslationService: SiteTranslateService,
    private translate: TranslateService
    ) { }

  changeTitle = (pageTitle: string): void => {
    const newTitle = `${pageTitle} | ${environment.appName}`;
    this.title.setTitle(newTitle);
  }

  changeTitleTranslated = (pageTitleKey: string): void => {
    const lang = localStorage.getItem('site-lang') || this.siteTranslationService.defaultLanguage;
    this.translate.use(lang).subscribe((res) => {
      const pageTitle = this.translate.instant(pageTitleKey);
      const newTitle = `${pageTitle} | ${environment.appName}`;
      this.title.setTitle(newTitle);
    });
  }

}
