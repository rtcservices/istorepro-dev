import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patternsHelper } from 'src/app/helpers/patterns.helper';

@Component({
  selector: 'ibe-rsa-item-dialog',
  templateUrl: './rsa-item-dialog.component.html',
  styleUrls: ['./rsa-item-dialog.component.scss']
})
export class RsaItemDialogComponent implements OnInit {
  itemForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createItemForm()
   }

  ngOnInit(): void {
  }


  createItemForm() {
    this.itemForm = this.fb.group({
      code: [''],
      type: [''],
      description: [''],
      scancode: [''],
      instock: ['']
    });
  }

  get itemFormControls() {
    return this.itemForm.controls;
  }


  onItemFormSubmit() {}

  resetItemForm() {
    this.itemForm.reset();
  }

}
