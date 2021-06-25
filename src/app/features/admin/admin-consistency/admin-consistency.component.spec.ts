import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsistencyComponent } from './admin-consistency.component';

describe('AdminConsistencyComponent', () => {
  let component: AdminConsistencyComponent;
  let fixture: ComponentFixture<AdminConsistencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsistencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsistencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
