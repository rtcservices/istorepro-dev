import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDirectPutawayLocationDialogComponent } from './ds-direct-putaway-location-dialog.component';

describe('DsDirectPutawayLocationDialogComponent', () => {
  let component: DsDirectPutawayLocationDialogComponent;
  let fixture: ComponentFixture<DsDirectPutawayLocationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsDirectPutawayLocationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDirectPutawayLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
