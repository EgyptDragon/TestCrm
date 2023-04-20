import { TestBed } from '@angular/core/testing';

import { FrontUsersService } from './front-users.service';

describe('FrontUsersService', () => {
  let service: FrontUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
