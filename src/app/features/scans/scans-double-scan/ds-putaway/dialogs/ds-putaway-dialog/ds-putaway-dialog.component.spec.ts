import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPutawayDialogComponent } from './ds-putaway-dialog.component';

describe('DsPutawayDialogComponent', () => {
  let component: DsPutawayDialogComponent;
  let fixture: ComponentFixture<DsPutawayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPutawayDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPutawayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
