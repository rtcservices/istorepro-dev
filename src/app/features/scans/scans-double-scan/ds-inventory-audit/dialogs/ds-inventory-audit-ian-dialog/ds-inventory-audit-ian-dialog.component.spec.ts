import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsInventoryAuditIanDialogComponent } from './ds-inventory-audit-ian-dialog.component';

describe('DsInventoryAuditIanDialogComponent', () => {
  let component: DsInventoryAuditIanDialogComponent;
  let fixture: ComponentFixture<DsInventoryAuditIanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsInventoryAuditIanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsInventoryAuditIanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
