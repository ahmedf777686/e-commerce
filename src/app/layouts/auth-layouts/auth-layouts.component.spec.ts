import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayoutsComponent } from './auth-layouts.component';

describe('AuthLayoutsComponent', () => {
  let component: AuthLayoutsComponent;
  let fixture: ComponentFixture<AuthLayoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthLayoutsComponent]
    });
    fixture = TestBed.createComponent(AuthLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
