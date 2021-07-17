import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ibe-od-item-dialog',
  templateUrl: './od-item-dialog.component.html',
  styleUrls: ['./od-item-dialog.component.scss']
})
export class OdItemDialogComponent implements OnInit {
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
