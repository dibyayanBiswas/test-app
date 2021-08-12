import { TestBed } from '@angular/core/testing';

import { DataCheckGuardGuard } from './data-check-guard.guard';

describe('DataCheckGuardGuard', () => {
  let guard: DataCheckGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DataCheckGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
