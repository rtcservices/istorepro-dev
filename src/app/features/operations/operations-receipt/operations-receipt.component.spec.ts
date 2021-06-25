import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsReceiptComponent } from './operations-receipt.component';

describe('OperationsReceiptComponent', () => {
  let component: OperationsReceiptComponent;
  let fixture: ComponentFixture<OperationsReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
