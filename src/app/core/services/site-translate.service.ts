import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteTranslateService {


  constructor() {
  }

  get defaultLanguage() {
    return "en";
  }

  get languages() {
    return ['en', 'jp'];
  }

}
