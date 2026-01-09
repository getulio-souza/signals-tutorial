import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntrackedDependenciesComponent } from './untracked-dependencies.component';

describe('UntrackedDependenciesComponent', () => {
  let component: UntrackedDependenciesComponent;
  let fixture: ComponentFixture<UntrackedDependenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UntrackedDependenciesComponent]
    });
    fixture = TestBed.createComponent(UntrackedDependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
