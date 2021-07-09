import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDirectTransferItemAssistanceDialogComponent } from './ds-direct-transfer-item-assistance-dialog.component';

describe('DsDirectTransferItemAssistanceDialogComponent', () => {
  let component: DsDirectTransferItemAssistanceDialogComponent;
  let fixture: ComponentFixture<DsDirectTransferItemAssistanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsDirectTransferItemAssistanceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDirectTransferItemAssistanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
