import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDateSelectionComponent } from './past-date-selection.component';

describe('PastDateSelectionComponent', () => {
  let component: PastDateSelectionComponent;
  let fixture: ComponentFixture<PastDateSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastDateSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastDateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
