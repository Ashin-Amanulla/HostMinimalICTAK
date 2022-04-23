import { TestBed } from '@angular/core/testing';

import { HeroAdminService } from './hero-admin.service';

describe('HeroAdminService', () => {
  let service: HeroAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
