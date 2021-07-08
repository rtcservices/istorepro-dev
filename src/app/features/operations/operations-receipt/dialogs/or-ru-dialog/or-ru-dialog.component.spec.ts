import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrRudialogComponent } from './or-ru-dialog.component';

describe('OrRudialogComponent', () => {
  let component: OrRudialogComponent;
  let fixture: ComponentFixture<OrRudialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrRudialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrRudialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
