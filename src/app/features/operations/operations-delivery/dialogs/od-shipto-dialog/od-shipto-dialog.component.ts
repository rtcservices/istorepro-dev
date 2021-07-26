import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patternsHelper } from 'src/app/helpers/patterns.helper';

@Component({
  selector: 'ibe-od-shipto-dialog',
  templateUrl: './od-shipto-dialog.component.html',
  styleUrls: ['./od-shipto-dialog.component.scss']
})
export class OdShiptoDialogComponent implements OnInit {
  ShiptoForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createShiptoForm();
  }
  ngOnInit(): void {}

  createShiptoForm() {
    this.ShiptoForm = this.fb.group({
      select: ['', [Validators.required]],
      shipto: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      address1: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.address)]
      ],
      address2: ['', [Validators.pattern(patternsHelper.address)]],
      address3: ['', [Validators.pattern(patternsHelper.address)]],
      address4: ['', [Validators.pattern(patternsHelper.address)]],
      zip: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      telephone: ['', [Validators.pattern(patternsHelper.telephone)]],
      fax: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      email: ['', [Validators.pattern(patternsHelper.emails)]]
    });
  }
  onShiptoSubmit() {}

  resetShiptoForm() {
    this.ShiptoForm.reset();
  }
  get dataShipFormControls() {
    return this.ShiptoForm.controls;
  }
}
