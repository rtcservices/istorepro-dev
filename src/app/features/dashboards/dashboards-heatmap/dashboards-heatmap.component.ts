import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { DhmCellDialogComponent } from './dialog/dhm-cell-dialog/dhm-cell-dialog.component';
import { TitleService } from '../../../services/title.service';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from '../../../services/site-translate.service';

@Component({
  selector: 'ibe-dashboards-heatmap',
  templateUrl: './dashboards-heatmap.component.html',
  styleUrls: ['./dashboards-heatmap.component.scss']
})
export class DashboardsHeatmapComponent implements OnInit {
  HeatMapForm!: FormGroup;

  formErrorTranslated = '';
  filterErrorTranslated = '';

  dummydata: any = [
    [
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'partial' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'free' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'free' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'partial' },
      { value: '2.7-2.3', status: 'partial' },
      { value: '2.7-2.3', status: 'partial' }
    ],
    [
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'free' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'partial' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'full' },
      { value: '2.7-2.3', status: 'full' }
    ]
  ];
  constructor(
    private fb: FormBuilder,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    public dialog: MatDialog
  ) {
    this.createHeatMapForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated(
      'menu.dashboardsHeatMap'
    );
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

  createHeatMapForm() {
    this.HeatMapForm = this.fb.group({
      warehouse: ['', [Validators.required]],
      po: [''],
      rowsplit: [''],
      item: [''],
      batchnumber: ['']
    });
  }

  get HeatMapFormControls() {
    return this.HeatMapForm.controls;
  }

  onHeatMapFormSubmit() {}

  resetHeatMapForm() {
    this.HeatMapForm.reset();
  }

  openCellDialog() {
    this.dialog.open(DhmCellDialogComponent, {
      width: '800px'
    });
  }
}
