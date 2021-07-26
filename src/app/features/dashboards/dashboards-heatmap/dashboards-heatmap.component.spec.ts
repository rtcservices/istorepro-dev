import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsHeatmapComponent } from './dashboards-heatmap.component';

describe('DashboardsHeatmapComponent', () => {
  let component: DashboardsHeatmapComponent;
  let fixture: ComponentFixture<DashboardsHeatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsHeatmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
