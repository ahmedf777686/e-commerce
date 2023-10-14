import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaroneComponent } from './navbarone.component';

describe('NavbaroneComponent', () => {
  let component: NavbaroneComponent;
  let fixture: ComponentFixture<NavbaroneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbaroneComponent]
    });
    fixture = TestBed.createComponent(NavbaroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
