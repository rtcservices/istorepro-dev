import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StprefDialogComponent } from './stpref-dialog.component';

describe('StprefDialogComponent', () => {
  let component: StprefDialogComponent;
  let fixture: ComponentFixture<StprefDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StprefDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StprefDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
