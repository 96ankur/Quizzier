import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitQuizDetailsComponent } from './submit-quiz-details.component';

describe('SubmitQuizDetailsComponent', () => {
  let component: SubmitQuizDetailsComponent;
  let fixture: ComponentFixture<SubmitQuizDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitQuizDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitQuizDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
