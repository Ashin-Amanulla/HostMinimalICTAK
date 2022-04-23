import { TestBed } from '@angular/core/testing';

import { HeroUserService } from './hero-user.service';

describe('HeroUserService', () => {
  let service: HeroUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
