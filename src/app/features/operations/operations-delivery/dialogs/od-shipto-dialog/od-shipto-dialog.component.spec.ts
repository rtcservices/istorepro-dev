import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdShiptoDialogComponent } from './od-shipto-dialog.component';

describe('OdShiptoDialogComponent', () => {
  let component: OdShiptoDialogComponent;
  let fixture: ComponentFixture<OdShiptoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdShiptoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdShiptoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
