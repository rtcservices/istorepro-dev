import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesStockAdjustComponent } from './routines-stock-adjust.component';

describe('RoutinesStockAdjustComponent', () => {
  let component: RoutinesStockAdjustComponent;
  let fixture: ComponentFixture<RoutinesStockAdjustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutinesStockAdjustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesStockAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
