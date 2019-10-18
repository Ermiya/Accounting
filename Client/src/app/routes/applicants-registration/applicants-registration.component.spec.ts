import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsRegistrationComponent } from './applicants-registration.component';

describe('ApplicantsRegistrationComponent', () => {
  let component: ApplicantsRegistrationComponent;
  let fixture: ComponentFixture<ApplicantsRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantsRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
