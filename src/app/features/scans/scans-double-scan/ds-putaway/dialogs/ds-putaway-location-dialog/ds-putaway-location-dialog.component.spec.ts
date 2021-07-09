import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPutawayLocationDialogComponent } from './ds-putaway-location-dialog.component';

describe('DsPutawayLocationDialogComponent', () => {
  let component: DsPutawayLocationDialogComponent;
  let fixture: ComponentFixture<DsPutawayLocationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPutawayLocationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPutawayLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
