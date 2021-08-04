import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DsWarehouseDialogComponent } from './dialogs/ds-warehouse-dialog/ds-warehouse-dialog.component';
import { TitleService } from '../../../services/title.service';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from '../../../services/site-translate.service';

@Component({
  selector: 'ibe-scans-double-scan',
  templateUrl: './scans-double-scan.component.html',
  styleUrls: ['./scans-double-scan.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScansDoubleScanComponent implements OnInit {
  scanType: any = '';
  formErrorTranslated = '';
  filterErrorTranslated = '';

  constructor(
    public dialog: MatDialog,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.scansDoubleScan');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

  changeScanType(scanType: string) {
    this.scanType = scanType;
  }

  openWarehouseDialog() {
    this.dialog.open(DsWarehouseDialogComponent, {
      width: '615px'
    });
  }
}
