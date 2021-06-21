import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  query,
  stagger
} from '@angular/animations';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { TranslateService } from '@ngx-translate/core';
import { TitleService } from '../../../core/services/title.service';
import { defaultTransactionReceipt, TransactionReceiptModel } from '../models/transaction-receipt.model';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionReceiptModalComponent } from '../transaction-receipt-modal/transaction-receipt-modal.component';

@Component({
  selector: 'rtc-transaction-receipt',
  templateUrl: './transaction-receipt.component.html',
  styleUrls: ['./transaction-receipt.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero, form', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(-30, [
            animate(
              '500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            )
          ])
        ])
      ])
    ]),
    trigger('easeInAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(
          ':enter',
          [
            style({ opacity: 0, width: '0px' }),
            stagger(50, [
              animate('300ms ease-out', style({ opacity: 1, width: '*' }))
            ])
          ],
          { optional: true }
        )
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' }))
          ])
        ])
      ])
    ])
  ]
})
export class TransactionReceiptComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;

  setupAddForm!: FormGroup;
  listItemsForm!: FormGroup;
  submitted = false;
  options: string[] = ['Alice', 'Bob', 'Charlie', 'Dan', 'Elizabeth', 'Fiza'];
  displayedColumns = [
    'item',
    'description',
    'sku',
    'quantity',
    'weight',
    'volume',
    'manufactureDate',
    'expiry',
    'batchNo',
    'remarks',
    'action'
  ];
  setups: TransactionReceiptModel[] = [];

  dataSource!: MatTableDataSource<any>;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private translate: TranslateService,
    private titleService: TitleService,
  ) {
    this.setups = [defaultTransactionReceipt];
  }

  ngOnInit(): void {
    this.setSetupAddFormValues();
    this.setListItemFormValues();
    const pageTitle = this.translate.instant('transactions.receipt.pageTitle');
    this.titleService.changeTitle(pageTitle);
  }
  setSetupAddFormValues() {
    this.setupAddForm = this.fb.group({
      wh: ['', [Validators.required]],
      owner: ['', [Validators.required]],
      grn: ['', [Validators.required]],
      addDate: ['', [Validators.required]],
      refNo: ['', [Validators.required]],
      remarks: ['']
    });
  }
  setListItemFormValues() {
    this.listItemsForm = this.fb.group({
      setups: this.fb.array([])
    });
    const fgs = [this.createListForm()];
    this.listItemsForm.setControl('setups', new FormArray(fgs));
    this.dataSource = new MatTableDataSource(
      (this.listItemsForm.get('setups') as FormArray).controls
    );
  }

  get setupAddFormControl() {
    return this.setupAddForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;
    if (this.setupAddForm.valid) {
      try {
      } catch (err) {}
    }
  }
  onAddItemRow() {
    this.dataSource.data.push(this.createListForm());
    this.dataSource._updateChangeSubscription();
  }
  onDeleteItemRow(event: any, item: FormGroup, idx: number) {
    this.dataSource.data.splice(idx, 1);
    this.dataSource._updateChangeSubscription();
  }
  getTotalQuantity() {
    return this.setups
      .map((t) => t.quantity)
      .reduce((acc, value) => acc + value, 0);
  }
  getTotalWeight() {
    return this.setups
      .map((t) => t.quantity)
      .reduce((acc, value) => acc + value, 0);
  }
  getTotalVolume() {
    return this.setups
      .map((t) => t.quantity)
      .reduce((acc, value) => acc + value, 0);
  }

  createListForm(): FormGroup {
    return  new FormGroup({
      itemId: new FormControl(''), // , Validators.required),
      item: new FormControl(''), // , Validators.required),
      description: new FormControl(''), // , Validators.required),
      sku: new FormControl(''), // , Validators.required),
      quantity: new FormControl(0), // , Validators.required),
      weight: new FormControl(0), // , Validators.required),
      volume: new FormControl(0), // , Validators.required),
      manufactureDate: new FormControl(''), // , Validators.required),
      expiry: new FormControl(''), // , Validators.required),
      batchNo: new FormControl(''), // , Validators.required),
      remarks: new FormControl(''), // , Validators.required),
      status: new FormControl(''), // , Validators.required),
    });
  }
  openDialog(): void {
  }
  onSearchModalOpen(element: FormGroup) {
    const dialogRef = this.dialog.open(TransactionReceiptModalComponent, {
      width: '600px',
      data: {element}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
