import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPickComponent } from './ds-pick.component';

describe('DsPickComponent', () => {
  let component: DsPickComponent;
  let fixture: ComponentFixture<DsPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
