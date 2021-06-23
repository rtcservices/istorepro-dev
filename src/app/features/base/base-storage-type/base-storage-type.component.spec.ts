import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStorageTypeComponent } from './base-storage-type.component';

describe('BaseStorageTypeComponent', () => {
  let component: BaseStorageTypeComponent;
  let fixture: ComponentFixture<BaseStorageTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseStorageTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseStorageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
