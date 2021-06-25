import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { SiteTranslateService } from './services/site-translate.service';

@Component({
  selector: 'rtc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private siteTranslate: SiteTranslateService) {
      this.translate.addLangs(this.siteTranslate.languages);
      this.translate.setDefaultLang(this.siteTranslate.defaultLanguage);
      const language = localStorage.getItem('site-lang') || this.siteTranslate.defaultLanguage;
      this.translate.use(language);
  }
}
