import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { QdOwnerDialogComponent } from './dialogs/qd-owner-dialog/qd-owner-dialog.component';

@Component({
  selector: 'ibe-query-documents',
  templateUrl: './query-documents.component.html',
  styleUrls: ['./query-documents.component.scss']
})
export class QueryDocumentsComponent implements OnInit {
  DocumentForm!: FormGroup;
  constructor(  private fb: FormBuilder, public dialog: MatDialog) {
    this.createDocumentForm()
  }

  ngOnInit(): void {
  }

  createDocumentForm() {
    this.DocumentForm = this.fb.group({
      warehouse: [''],
      documenttype: [''],
      documentnumber: [''],
      datefromoperator: [''],
      datefrom: [''],
      dateto: [''],
      datetooperator: [''],
      owner: ['']
    });
  }

  get DocumentFormControls() {
    return this.DocumentForm.controls;
  }

  saveDocumentFormData() {}

  resetDocumentForm() {
    this.DocumentForm.reset();
  }

  openOwnerDialog() {
    this.dialog.open(QdOwnerDialogComponent, {
      width: '800px'
    });
  }

}
