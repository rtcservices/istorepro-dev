import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { HeaderNavItem } from '../../../models/header-nav-item.model';
import { AuthService } from '../../../services/auth.service';
import { HeaderNavService } from '../../../services/header-nav.service';

@Component({
  selector: 'rtc-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {
  headerNavItems!: HeaderNavItem[];
  menu: any;
  notificationsTranslated = '';
  settingsTranslated = '';
  logoutTranslated = '';
  constructor(
    public router: Router,
    public translate: TranslateService,
    public headerNavService: HeaderNavService,
    public authService: AuthService) {
  }

  async ngOnInit() {
    const language = this.translate.currentLang;
    this.translate.use(language).subscribe((res) => {

      this.notificationsTranslated = this.translate.instant('menu.notifications');
      this.settingsTranslated = this.translate.instant('menu.settings');
      this.logoutTranslated = this.translate.instant('menu.logout');

      this.headerNavItems = [
        {
          displayName: this.translate.instant('menu.setup'),
          children: [
            {
              displayName: this.translate.instant('general.add'),
              route: 'setup/add',
            },
            {
              displayName: this.translate.instant('general.search'),
              route: 'setup/search',
            }
          ]
        },
        {
          displayName: this.translate.instant('menu.transactions'),
          route: '',
          children: [
            {
              displayName: this.translate.instant('menu.transactionsReceipt'),
              route: 'transactions/receipt'
            }
          ]
        },
        {
          displayName: this.translate.instant('menu.routine'),
          route: '',
          children: [
            {
              displayName: this.translate.instant('general.add'),
              route: 'routine/add'
            },
            {
              displayName: this.translate.instant('general.search'),
              route: 'routine/search'
            }
          ]
        },
        {
          displayName: this.translate.instant('menu.dashboard'),
          route: 'dashboard'
        },
        {
          displayName: this.translate.instant('menu.query'),
          route: 'query'
        }
      ];
    });
  }

  async logOut() {
    this.authService.logout();
    this.router.navigateByUrl('["/auth/login"]')
  }

}
