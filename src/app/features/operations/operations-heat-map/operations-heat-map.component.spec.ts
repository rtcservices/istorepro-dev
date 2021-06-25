import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsHeatMapComponent } from './operations-heat-map.component';

describe('OperationsHeatMapComponent', () => {
  let component: OperationsHeatMapComponent;
  let fixture: ComponentFixture<OperationsHeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsHeatMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
