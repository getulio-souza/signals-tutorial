import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignalsComponent } from './computed-signals.component';

describe('ComputedSignalsComponent', () => {
  let component: ComputedSignalsComponent;
  let fixture: ComponentFixture<ComputedSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputedSignalsComponent]
    });
    fixture = TestBed.createComponent(ComputedSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
