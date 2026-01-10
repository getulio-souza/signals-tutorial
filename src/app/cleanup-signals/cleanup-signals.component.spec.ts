import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanupSignalsComponent } from './cleanup-signals.component';

describe('CleanupSignalsComponent', () => {
  let component: CleanupSignalsComponent;
  let fixture: ComponentFixture<CleanupSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleanupSignalsComponent]
    });
    fixture = TestBed.createComponent(CleanupSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
