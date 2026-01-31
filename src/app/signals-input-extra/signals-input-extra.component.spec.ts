import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsInputExtraComponent } from './signals-input-extra.component';

describe('SignalsInputExtraComponent', () => {
  let component: SignalsInputExtraComponent;
  let fixture: ComponentFixture<SignalsInputExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsInputExtraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsInputExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
