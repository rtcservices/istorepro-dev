import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPickDialogComponent } from './ds-pick-dialog.component';

describe('DsPickDialogComponent', () => {
  let component: DsPickDialogComponent;
  let fixture: ComponentFixture<DsPickDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPickDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPickDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
