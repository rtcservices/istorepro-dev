import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPutawayItemAssistanceDialogComponent } from './ds-putaway-item-assistance-dialog.component';

describe('DsPutawayItemAssistanceDialogComponent', () => {
  let component: DsPutawayItemAssistanceDialogComponent;
  let fixture: ComponentFixture<DsPutawayItemAssistanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPutawayItemAssistanceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPutawayItemAssistanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
