import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrRuDialogComponent } from './or-ru-dialog.component';

describe('OrRuDialogComponent', () => {
  let component: OrRuDialogComponent;
  let fixture: ComponentFixture<OrRuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrRuDialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrRuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
