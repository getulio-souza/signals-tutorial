import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsRxjsComponent } from './signals-rxjs.component';

describe('SignalsRxjsComponent', () => {
  let component: SignalsRxjsComponent;
  let fixture: ComponentFixture<SignalsRxjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsRxjsComponent]
    });
    fixture = TestBed.createComponent(SignalsRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
