import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrItemDialogComponent } from './or-item-dialog.component';

describe('OrItemDialogComponent', () => {
  let component: OrItemDialogComponent;
  let fixture: ComponentFixture<OrItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrItemDialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
