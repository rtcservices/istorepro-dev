import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { TranslateService } from '@ngx-translate/core';
import { patternsHelper } from '../../../helpers/patterns.helper';
import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';
import { RoutineInventorySearchModel } from '../models/inventory.model';
import { RiAssignOperatorDialogComponent } from './dialogs/ri-assign-operator-dialog/ri-assign-operator-dialog.component';

@Component({
  selector: 'ibe-routines-inventory-audit',
  templateUrl: './routines-inventory-audit.component.html',
  styleUrls: ['./routines-inventory-audit.component.scss']
})
export class RoutinesInventoryAuditComponent implements OnInit {
  @ViewChild('routinesInventoryTab', { static: false })
  routinesInventoryTab!: MatTabGroup;
  routinesInventoryForm!: FormGroup;
  formErrorTranslated = '';
  filterErrorTranslated = '';

  displayedColumns = ['warehouse', 'ian','iandate','auditstatus'];

  searchInventoryForm!: FormGroup;
  searchDataSource: RoutineInventorySearchModel[] = [];
  dummySearchModel: RoutineInventorySearchModel[] = [
    {
      warehouse: 'GEM1234', ian: 'Gemini Software', iandate: '1213a1a',
      auditstatus: 'active'
    },
    {
      warehouse: 'GEM1234', ian: 'Gemini Software', iandate: '1213a1a',
      auditstatus: 'completed'
    },
    {
      warehouse: 'GEM1234', ian: 'Gemini Software', iandate: '1213a1a',
      auditstatus: 'inprogress'
    }

  ];


  mode:boolean=true;
  constructor(private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService,
    public dialog: MatDialog) {
    this.createroutinesInventoryForm()
    this.createSearchInventoryForm()
  }
  ngOnInit(): void {
    this.searchDataSource = [...this.dummySearchModel];
  }


  createroutinesInventoryForm() {
    this.routinesInventoryForm = this.fb.group({
      warehouse: [''],
      ian: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      row: [''],
      unit: [''],
      location: [''],
      status: ['']
    });
  }

  get routinesInventoryFormControls() {
    return this.routinesInventoryForm.controls;
  }

  onroutinesInventorySubmit() { }

  resetroutinesInventoryForm() {
    this.routinesInventoryForm.reset();
  }

  saveInventoryForm() { }
  deleteInventoryForm() { }



  createSearchInventoryForm() {
    this.searchInventoryForm = this.fb.group({
      warehouse: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      auditstatus: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      ian: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      iandate: [''],
    });
  }

  get searchInventoryFormControls() {
    return this.searchInventoryForm.controls;
  }

  onDataInventorySubmit() { }

  onSearchInventorySubmit() {
    if (!this.searchInventoryForm.valid) {
      this.notification.error(this.formErrorTranslated);
      return;
    }
    const warehouse: string =
      this.searchInventoryForm.get('warehouse')?.value || '';
    const iandate: string =
      this.searchInventoryForm.get('iandate')?.value || '';
      const ian: string =
      this.searchInventoryForm.get('ian')?.value || '';
    const auditstatus: string =
      this.searchInventoryForm.get('auditstatus')?.value || '';
    if (warehouse.trim() === '' && iandate.trim() === '' &&
    ian.trim() === '' && auditstatus.trim() === '') {
      this.notification.error(this.filterErrorTranslated);
      return;
    } else {
      this.loader.show();
      setTimeout(() => {
        this.searchDataSource = [...this.dummySearchModel];
        this.loader.hide();
      }, 500);
    }
  }

  resetInventorySearchForm() {
    this.searchInventoryForm.reset();
    this.searchDataSource = [];
  }


  openAssignOperatorDialog() {
    this.dialog.open(RiAssignOperatorDialogComponent, {
      width: '800px'
    });
  }



}
