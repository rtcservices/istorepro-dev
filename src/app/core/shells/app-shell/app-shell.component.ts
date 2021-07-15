import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { patternsHelper } from 'src/app/helpers/patterns.helper';

import { slideInAnimation } from '../../../animations/animations';

import { HeaderNavItem } from '../../../models/header-nav-item.model';
import { NotificationModel } from '../../../models/notification.model';

import { AuthService } from '../../../services/auth.service';
import { HeaderNavService } from '../../../services/header-nav.service';
@Component({
  selector: 'ibe-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  animations: [slideInAnimation]
})
export class AppShellComponent implements OnInit {
  headerNavItems!: HeaderNavItem[];
  menu: any;
  profileUpdateForm!: FormGroup;
  userAccountTranslated = '';
  notificationsTranslated = '';
  settingsTranslated = '';
  logoutTranslated = '';

  notifications: NotificationModel[] = [];

  constructor(
    private fb: FormBuilder,
    public router: Router,
    public translate: TranslateService,
    public headerNavService: HeaderNavService,
    public authService: AuthService
  ) {
    this.createProfileUpdateForm();
  }

  async ngOnInit() {
    this.getNotifications();
    this.setTranslations();
    this.setTranslations();
  }

  getNotifications() {
    this.notifications = [
      {
        id: 1,
        title: 'Some Title',
        subTitle: 'Posted by Ava',
        author: 'Ava',
        avatar: 'https://lorempixel.com/200/200/people/1/',
        time: new Date(2021, 0, 21)
      },
      {
        id: 2,
        title: 'Some Title',
        subTitle: 'Posted by Ava',
        author: 'Ava',
        avatar: 'https://lorempixel.com/200/200/people/2/',
        time: new Date(2021, 0, 21)
      },
      {
        id: 3,
        title: 'Some Title',
        subTitle: 'Posted by Ava',
        author: 'Ava',
        avatar: 'https://lorempixel.com/200/200/people/3/',
        time: new Date(2021, 0, 21)
      },
      {
        id: 4,
        title: 'Some Title',
        subTitle: 'Posted by Ava',
        author: 'Ava',
        avatar: 'https://lorempixel.com/200/200/people/4/',
        time: new Date(2021, 0, 21)
      },
      {
        id: 5,
        title: 'Some Title',
        subTitle: 'Posted by Ava',
        author: 'Ava',
        avatar: 'https://lorempixel.com/200/200/people/5/',
        time: new Date(2021, 0, 21)
      },
      {
        id: 6,
        title: 'Some Title',
        subTitle: 'Posted by Ava',
        author: 'Ava',
        avatar: 'https://lorempixel.com/200/200/people/6/',
        time: new Date(2021, 0, 21)
      },
      {
        id: 7,
        title: 'Some Title',
        subTitle: 'Posted by Ava',
        author: 'Ava',
        avatar: 'https://lorempixel.com/200/200/people/7/',
        time: new Date(2021, 0, 21)
      },
      {
        id: 8,
        title: 'Some Title',
        subTitle: 'Posted by Ava',
        author: 'Ava',
        avatar: 'https://lorempixel.com/200/200/people/8/',
        time: new Date(2021, 0, 21)
      },
      {
        id: 9,
        title: 'Some Title',
        subTitle: 'Posted by Ava',
        author: 'Ava',
        avatar: 'https://lorempixel.com/200/200/people/9/',
        time: new Date(2021, 0, 21)
      },
      {
        id: 10,
        title: 'Some Title',
        subTitle: 'Posted by Ava',
        author: 'Ava',
        avatar: 'https://lorempixel.com/200/200/people/10/',
        time: new Date(2021, 0, 21)
      }
    ];
  }

  setTranslations() {
    const language = this.translate.currentLang;
    this.translate.use(language).subscribe((res) => {
      this.userAccountTranslated = this.translate.instant('menu.userAccount');
      this.notificationsTranslated =
        this.translate.instant('menu.notifications');
      this.settingsTranslated = this.translate.instant('menu.settings');
      this.logoutTranslated = this.translate.instant('menu.logout');

      this.setHeaderNavItems();
    });
  }

  setHeaderNavItems() {
    this.headerNavItems = [
      {
        displayName: this.translate.instant('menu.setup'),
        children: [
          {
            displayName: this.translate.instant('menu.setupCompany'),
            route: 'setup/company'
          },
          {
            displayName: this.translate.instant('menu.setupWarehouse'),
            route: 'setup/warehouse'
          },
          {
            displayName: this.translate.instant('menu.setupOwner'),
            route: 'setup/owner'
          },
          {
            displayName: this.translate.instant('menu.setupSecurity'),
            route: 'setup/security'
          }
        ]
      },
      {
        displayName: this.translate.instant('menu.base'),
        route: '',
        children: [
          {
            displayName: this.translate.instant('menu.baseItemType'),
            route: 'base/item-type'
          },
          {
            displayName: this.translate.instant('menu.baseItem'),
            route: 'base/item'
          },
          {
            displayName: this.translate.instant('menu.baseStorageType'),
            route: 'base/storage-type'
          },
          {
            displayName: this.translate.instant('menu.baseZone'),
            route: 'base/zone'
          },
          {
            displayName: this.translate.instant('menu.baseLocation'),
            route: 'base/location'
          },
          {
            displayName: this.translate.instant('menu.baseReason'),
            route: 'base/reason'
          }
        ]
      },
      {
        displayName: this.translate.instant('menu.operations'),
        route: '',
        children: [
          {
            displayName: this.translate.instant('menu.operationsReceipt'),
            route: 'operations/receipt'
          },
          {
            displayName: this.translate.instant(
              'menu.operationsLocationManagement'
            ),
            route: 'operations/location-management'
          },
          {
            displayName: this.translate.instant('menu.operationsHeatMap'),
            route: 'operations/heat-map'
          },
          {
            displayName: this.translate.instant('menu.operationsDelivery'),
            route: 'operations/delivery'
          }
        ]
      },
      {
        displayName: this.translate.instant('menu.scans'),
        route: '',
        children: [
          {
            displayName: this.translate.instant('menu.scansDoubleScan'),
            route: 'scans/double-scan'
          }
        ]
      },
      {
        displayName: this.translate.instant('menu.routines'),
        route: '',
        children: [
          {
            displayName: this.translate.instant('menu.routinesInventoryAudit'),
            route: 'routines/inventory-audit'
          },
          {
            displayName: this.translate.instant('menu.routinesStockAdjust'),
            route: 'routines/stock-adjust'
          }
        ]
      },
      {
        displayName: this.translate.instant('menu.query'),
        route: '',
        children: [
          {
            displayName: this.translate.instant('menu.queryStock'),
            route: 'query/stock'
          },
          {
            displayName: this.translate.instant('menu.queryTransactions'),
            route: 'query/transactions'
          },
          {
            displayName: this.translate.instant('menu.queryDocuments'),
            route: 'query/documents'
          }
        ]
      },
      {
        displayName: this.translate.instant('menu.dashboards'),
        route: '',
        children: [
          {
            displayName: this.translate.instant('menu.dashboardsMIS'),
            route: 'dashboards/mis'
          }
        ]
      }
      // {
      //   displayName: this.translate.instant('menu.admin'),
      //   route: '',
      //   children: [
      //     {
      //       displayName: this.translate.instant('menu.adminSystemControl'),
      //       route: 'admin/system-control'
      //     },
      //     {
      //       displayName: this.translate.instant('menu.adminConsistency'),
      //       route: 'admin/consistency'
      //     },
      //     {
      //       displayName: this.translate.instant('menu.adminLoginAudit'),
      //       route: 'admin/login-audit'
      //     },
      //     {
      //       displayName: this.translate.instant('menu.adminAuditTrail'),
      //       route: 'admin/audit-trail'
      //     }
      //   ]
      // }
    ];
  }

  async prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  async logout() {
    this.authService.logout();
    this.router.navigateByUrl('["/auth/login"]');
  }

  async goToSettings() {
    this.router.navigateByUrl('["/settings/profile"]');
  }

  createProfileUpdateForm() {
    this.profileUpdateForm = this.fb.group(
      {
        fullName: [''],
        loginName: [''],
        oldPassword: [''],
        newPassword: [''],
        confirmPassword: ['']
      },
      this.passwordsMatchValidator
    );
  }

  get profileUpdateFormControls() {
    return this.profileUpdateForm.controls;
  }

  onProfileUpdateSubmit() {}

  resetProfileUpdateForm() {
    this.profileUpdateForm.reset();
  }
  private passwordsMatchValidator(form: FormGroup) {
    if (form.get('password') && form.get('confirmPassword')) {
      return form.get('password')?.value === form.get('confirmPassword')?.value
        ? null
        : { mismatch: true };
    }
    return null;
  }

  onStrengthChanged(event: any) {}
}
