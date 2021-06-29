import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { slideInAnimation } from '../../../animations/animations';
@Component({
  selector: 'ibe-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrls: ['./auth-shell.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AuthShellComponent implements OnInit {

  appVersion = '';
  appTimeStamp = '';

  constructor() { }

  ngOnInit(): void {
    this.appVersion = environment.appVersion;
    this.appTimeStamp = environment.appTimeStamp;
  }

  async prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
