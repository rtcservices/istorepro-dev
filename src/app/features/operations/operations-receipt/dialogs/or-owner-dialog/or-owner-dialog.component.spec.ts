import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrOwnerdialogComponent } from './or-owner-dialog.component';

describe('OrOwnerdialogComponent', () => {
  let component: OrOwnerdialogComponent;
  let fixture: ComponentFixture<OrOwnerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrOwnerdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrOwnerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
