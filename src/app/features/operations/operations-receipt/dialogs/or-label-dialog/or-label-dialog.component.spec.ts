import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrLabelDialogComponent } from './or-label-dialog.component';

describe('OrLabelDialogComponent', () => {
  let component: OrLabelDialogComponent;
  let fixture: ComponentFixture<OrLabelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrLabelDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrLabelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
