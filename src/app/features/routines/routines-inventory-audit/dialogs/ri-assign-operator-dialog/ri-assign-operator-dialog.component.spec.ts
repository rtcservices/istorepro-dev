import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiAssignOperatorDialogComponent } from './ri-assign-operator-dialog.component';

describe('RiAssignOperatorDialogComponent', () => {
  let component: RiAssignOperatorDialogComponent;
  let fixture: ComponentFixture<RiAssignOperatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiAssignOperatorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiAssignOperatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
