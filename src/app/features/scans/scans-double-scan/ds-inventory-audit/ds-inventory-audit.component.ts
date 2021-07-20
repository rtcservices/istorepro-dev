import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { DsInventoryAuditIanDialogComponent } from './dialogs/ds-inventory-audit-ian-dialog/ds-inventory-audit-ian-dialog.component';
import { DsInventoryAuditItemAssistanceDialogComponent } from './dialogs/ds-inventory-audit-item-assistance-dialog/ds-inventory-audit-item-assistance-dialog.component';
import { DsInventoryAuditLocationDialogComponent } from './dialogs/ds-inventory-audit-location-dialog/ds-inventory-audit-location-dialog.component';

@Component({
  selector: 'ibe-ds-inventory-audit',
  templateUrl: './ds-inventory-audit.component.html',
  styleUrls: ['./ds-inventory-audit.component.scss']
})
export class DsInventoryAuditComponent implements OnInit {
  inventoryAuditForm!: FormGroup;
  constructor(  private fb: FormBuilder,public dialog: MatDialog) {
    this.createinventoryAuditForm()
  }
  ngOnInit(): void {
  }


  createinventoryAuditForm() {
    this.inventoryAuditForm = this.fb.group({
      location: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      warehouse: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      ianscan: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      item: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      good: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.numeric)]
      ],
      dmg: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.numeric)]
      ]
    });
  }

  get inventoryAuditFormControls() {
    return this.inventoryAuditForm.controls;
  }

  oninventoryAuditFormSubmit() {}
  resetinventoryAuditForm() {
    this.inventoryAuditForm.reset();

  }


  openIanDialog() {
    this.dialog.open(DsInventoryAuditIanDialogComponent, {
      width: '615px'
    });
  }


  openItemAssistanceDialog() {
    this.dialog.open(DsInventoryAuditItemAssistanceDialogComponent, {
      width: '615px'
    });
  }




  openLocationDialog() {
    this.dialog.open(DsInventoryAuditLocationDialogComponent, {
      width: '615px'
    });
  }



}
