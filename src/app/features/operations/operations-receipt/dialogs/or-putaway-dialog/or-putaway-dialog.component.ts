import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patternsHelper } from 'src/app/helpers/patterns.helper';

@Component({
  selector: 'ibe-or-putaway-dialog',
  templateUrl: './or-putaway-dialog.component.html',
  styleUrls: ['./or-putaway-dialog.component.scss']
})
export class OrPutawayDialogComponent implements OnInit {
 putawayForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createPutawayForm()
   }

  ngOnInit(): void {
  }


  createPutawayForm() {
    this.putawayForm = this.fb.group({
      warehouse: [''],
      owner: [''],
      po: [''],
      grn: [''],
      item: [''],
      itemType: [''],
      operator: [''],
      remarks: ['',[Validators.pattern(patternsHelper.alphanumeric)]],
      batchNo: [''],
      storageType: ['', [Validators.required]],
      location: ['', [Validators.required,Validators.pattern(patternsHelper.alphanumeric)]],
    });
  }

  get putawayFormControls() {
    return this.putawayForm.controls;
  }


  onPutawayFormSubmit() {}

  resetReceiptSearchForm() {
    this.putawayForm.reset();
  }

}
