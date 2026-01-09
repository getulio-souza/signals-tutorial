import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualityFunctionsComponent } from './equality-functions.component';

describe('EqualityFunctionsComponent', () => {
  let component: EqualityFunctionsComponent;
  let fixture: ComponentFixture<EqualityFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EqualityFunctionsComponent]
    });
    fixture = TestBed.createComponent(EqualityFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
