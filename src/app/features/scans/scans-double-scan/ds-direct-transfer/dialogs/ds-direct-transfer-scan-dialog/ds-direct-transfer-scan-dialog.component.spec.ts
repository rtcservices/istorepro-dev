import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDirectTransferScanDialogComponent } from './ds-direct-transfer-scan-dialog.component';

describe('DsDirectTransferScanDialogComponent', () => {
  let component: DsDirectTransferScanDialogComponent;
  let fixture: ComponentFixture<DsDirectTransferScanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsDirectTransferScanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDirectTransferScanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
