import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { SiteGeolocationPosition } from './models/geolocation-position.model';

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
      this.getUserLocation();
  }
  getUserLocation() {
    let startPos: SiteGeolocationPosition;
    const geoOptions = {
      maximumAge: 5 * 60 * 1000,
    }

    const geoSuccess = (position: GeolocationPosition) => {
      startPos = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: position.timestamp,
      };
      localStorage.setItem('user-location', JSON.stringify(startPos));
    };
    const geoError = (error: any) => {
      console.log('Error occurred. Error code: ' + error);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
      localStorage.removeItem('user-location');
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  }
}
