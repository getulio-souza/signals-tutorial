import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBindingSignalComponent } from './two-way-data-binding-signal.component';

describe('TwoWayDataBindingSignalComponent', () => {
  let component: TwoWayDataBindingSignalComponent;
  let fixture: ComponentFixture<TwoWayDataBindingSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayDataBindingSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDataBindingSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
