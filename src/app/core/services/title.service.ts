import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title) { }

  changeTitle = (pageTitle: string): void => {
    const newTitle = `${pageTitle} | ${environment.appName}`;
    this.title.setTitle(newTitle);
  }

}
