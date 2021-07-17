import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdOwnerDialogComponent } from './od-owner-dialog.component';

describe('OdOwnerDialogComponent', () => {
  let component: OdOwnerDialogComponent;
  let fixture: ComponentFixture<OdOwnerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdOwnerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
