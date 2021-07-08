import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiOwnerDialogComponent } from './bi-owner-dialog.component';

describe('BiOwnerDialogComponent', () => {
  let component: BiOwnerDialogComponent;
  let fixture: ComponentFixture<BiOwnerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiOwnerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
