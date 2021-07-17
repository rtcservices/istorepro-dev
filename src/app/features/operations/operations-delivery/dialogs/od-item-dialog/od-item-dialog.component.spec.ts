import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdItemDialogComponent } from './od-item-dialog.component';

describe('OdItemDialogComponent', () => {
  let component: OdItemDialogComponent;
  let fixture: ComponentFixture<OdItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
