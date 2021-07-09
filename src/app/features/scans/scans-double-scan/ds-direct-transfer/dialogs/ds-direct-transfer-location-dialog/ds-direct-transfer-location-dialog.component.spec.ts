import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDirectTransferLocationDialogComponent } from './ds-direct-transfer-location-dialog.component';

describe('DsDirectTransferLocationDialogComponent', () => {
  let component: DsDirectTransferLocationDialogComponent;
  let fixture: ComponentFixture<DsDirectTransferLocationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsDirectTransferLocationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDirectTransferLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
