import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatapaswordComponent } from './updatapasword.component';

describe('UpdatapaswordComponent', () => {
  let component: UpdatapaswordComponent;
  let fixture: ComponentFixture<UpdatapaswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatapaswordComponent]
    });
    fixture = TestBed.createComponent(UpdatapaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
