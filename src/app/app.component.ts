import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { slideInAnimation } from './core/animations/route.animations';

import { SiteTranslateService } from './core/services/site-translate.service';

@Component({
  selector: 'rtc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
