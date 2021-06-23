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
              displayName: this.translate.instant('menu.setupCompany'),
              route: 'setup/company',
            },
            {
              displayName: this.translate.instant('menu.setupWarehouse'),
              route: 'setup/warehouse',
            },
            {
              displayName: this.translate.instant('menu.setupOwner'),
              route: 'setup/owner',
            },
            {
              displayName: this.translate.instant('menu.setupSecurity'),
              route: 'setup/security',
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
            },
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
              displayName: this.translate.instant('menu.operationsLocationManagement'),
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
        },
        {
          displayName: this.translate.instant('menu.admin'),
          route: '',
          children: [
            {
              displayName: this.translate.instant('menu.adminSystemControl'),
              route: 'admin/system-control'
            },
            {
              displayName: this.translate.instant('menu.adminConsistency'),
              route: 'admin/consistency'
            },
            {
              displayName: this.translate.instant('menu.adminLoginAudit'),
              route: 'admin/login-audit'
            },
            {
              displayName: this.translate.instant('menu.adminAuditTrail'),
              route: 'admin/audit-trail'
            }
          ]
        }
      ];
    });
  }

  async logOut() {
    this.authService.logout();
    this.router.navigateByUrl('["/auth/login"]')
  }

}
