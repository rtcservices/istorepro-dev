import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../../animations/animations';

@Component({
  selector: 'rtc-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrls: ['./auth-shell.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AuthShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
