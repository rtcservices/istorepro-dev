import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDirectTransferPutawayDialogComponent } from './ds-direct-transfer-putaway-dialog.component';

describe('DsDirectTransferPutawayDialogComponent', () => {
  let component: DsDirectTransferPutawayDialogComponent;
  let fixture: ComponentFixture<DsDirectTransferPutawayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsDirectTransferPutawayDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDirectTransferPutawayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
