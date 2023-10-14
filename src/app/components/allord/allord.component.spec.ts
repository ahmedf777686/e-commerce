import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllordComponent } from './allord.component';

describe('AllordComponent', () => {
  let component: AllordComponent;
  let fixture: ComponentFixture<AllordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllordComponent]
    });
    fixture = TestBed.createComponent(AllordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
