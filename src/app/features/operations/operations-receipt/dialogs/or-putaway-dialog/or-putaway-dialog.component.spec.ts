import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrPutawayDialogComponent } from './or-putaway-dialog.component';

describe('OrPutawayDialogComponent', () => {
  let component: OrPutawayDialogComponent;
  let fixture: ComponentFixture<OrPutawayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrPutawayDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrPutawayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
