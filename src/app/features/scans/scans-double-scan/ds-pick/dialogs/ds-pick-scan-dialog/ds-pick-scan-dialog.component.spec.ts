import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPickScanDialogComponent } from './ds-pick-scan-dialog.component';

describe('DsPickScanDialogComponent', () => {
  let component: DsPickScanDialogComponent;
  let fixture: ComponentFixture<DsPickScanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPickScanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPickScanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
