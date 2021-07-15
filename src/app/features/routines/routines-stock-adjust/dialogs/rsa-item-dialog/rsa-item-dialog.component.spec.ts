import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsaItemDialogComponent } from './rsa-item-dialog.component';

describe('RsaItemDialogComponent', () => {
  let component: RsaItemDialogComponent;
  let fixture: ComponentFixture<RsaItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsaItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsaItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
