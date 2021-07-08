import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrItemdialogComponent } from './or-item-dialog.component';

describe('OrItemdialogComponent', () => {
  let component: OrItemdialogComponent;
  let fixture: ComponentFixture<OrItemdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrItemdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrItemdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
