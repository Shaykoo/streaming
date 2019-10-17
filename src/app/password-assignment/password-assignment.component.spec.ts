import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAssignmentComponent } from './password-assignment.component';

describe('PasswordAssignmentComponent', () => {
  let component: PasswordAssignmentComponent;
  let fixture: ComponentFixture<PasswordAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
