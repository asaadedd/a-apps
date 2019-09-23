import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationCreateComponent } from './user-information-create.component';

describe('RegisterComponent', () => {
  let component: UserInformationCreateComponent;
  let fixture: ComponentFixture<UserInformationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInformationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
