import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsDeliveryComponent } from './operations-delivery.component';

describe('OperationsDeliveryComponent', () => {
  let component: OperationsDeliveryComponent;
  let fixture: ComponentFixture<OperationsDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
