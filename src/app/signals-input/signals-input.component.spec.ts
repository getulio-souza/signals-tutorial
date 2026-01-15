import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsInputComponent } from './signals-input.component';

describe('SignalsInputComponent', () => {
  let component: SignalsInputComponent;
  let fixture: ComponentFixture<SignalsInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsInputComponent]
    });
    fixture = TestBed.createComponent(SignalsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
