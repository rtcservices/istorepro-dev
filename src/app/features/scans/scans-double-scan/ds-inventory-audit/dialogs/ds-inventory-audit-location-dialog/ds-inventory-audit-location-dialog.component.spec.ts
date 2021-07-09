import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsInventoryAuditLocationDialogComponent } from './ds-inventory-audit-location-dialog.component';

describe('DsInventoryAuditLocationDialogComponent', () => {
  let component: DsInventoryAuditLocationDialogComponent;
  let fixture: ComponentFixture<DsInventoryAuditLocationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsInventoryAuditLocationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsInventoryAuditLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
