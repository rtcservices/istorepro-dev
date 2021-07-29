import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { slideInAnimation } from '../../../animations/animations';
@Component({
  selector: 'ibe-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrls: ['./auth-shell.component.scss'],
  animations: [slideInAnimation]
})
export class AuthShellComponent implements OnInit {
  appVersion = '';
  appTimeStamp = '';
  appScreenResolution = '';

  projectStartYear = 2021;
  copyrightYearDisplay = '';

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.appScreenResolution = this.getScreenResolution();
  }

  ngOnInit(): void {
    this.appVersion = environment.appVersion;
    this.appTimeStamp = environment.appTimeStamp;
    this.appScreenResolution = this.getScreenResolution();

    this.copyrightYearDisplay = String(this.projectStartYear);
    if (this.projectStartYear !== new Date().getFullYear()) {
      this.copyrightYearDisplay += '-' + new Date().getFullYear();
    }
  }

  async prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  getScreenResolution(): string {
    return `${window.innerWidth}x${window.innerHeight}px`;
  }
}
