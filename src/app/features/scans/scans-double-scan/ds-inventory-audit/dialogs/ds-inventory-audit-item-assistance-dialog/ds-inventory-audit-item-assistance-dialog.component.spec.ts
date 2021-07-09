import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsInventoryAuditItemAssistanceDialogComponent } from './ds-inventory-audit-item-assistance-dialog.component';

describe('DsInventoryAuditItemAssistanceDialogComponent', () => {
  let component: DsInventoryAuditItemAssistanceDialogComponent;
  let fixture: ComponentFixture<DsInventoryAuditItemAssistanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsInventoryAuditItemAssistanceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsInventoryAuditItemAssistanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
