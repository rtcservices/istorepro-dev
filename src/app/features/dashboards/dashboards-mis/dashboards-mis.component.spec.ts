import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsMisComponent } from './dashboards-mis.component';

describe('DashboardsMisComponent', () => {
  let component: DashboardsMisComponent;
  let fixture: ComponentFixture<DashboardsMisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsMisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
