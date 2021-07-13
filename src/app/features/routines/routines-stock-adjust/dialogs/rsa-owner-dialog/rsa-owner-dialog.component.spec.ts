import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsaOwnerDialogComponent } from './rsa-owner-dialog.component';

describe('RsaOwnerDialogComponent', () => {
  let component: RsaOwnerDialogComponent;
  let fixture: ComponentFixture<RsaOwnerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsaOwnerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsaOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
