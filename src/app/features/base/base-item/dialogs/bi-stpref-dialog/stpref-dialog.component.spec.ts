import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiStprefDialogComponent } from './stpref-dialog.component';

describe('BiStprefDialogComponent', () => {
  let component: BiStprefDialogComponent;
  let fixture: ComponentFixture<BiStprefDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiStprefDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiStprefDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
