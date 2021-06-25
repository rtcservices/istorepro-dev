import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsLocationManagementComponent } from './operations-location-management.component';

describe('OperationsLocationManagementComponent', () => {
  let component: OperationsLocationManagementComponent;
  let fixture: ComponentFixture<OperationsLocationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsLocationManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsLocationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
