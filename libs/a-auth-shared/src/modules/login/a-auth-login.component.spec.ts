import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAuthLoginComponent } from './a-auth-login.component';

describe('AAuthLoginComponent', () => {
  let component: AAuthLoginComponent;
  let fixture: ComponentFixture<AAuthLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAuthLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
