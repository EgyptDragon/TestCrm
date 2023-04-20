import { TestBed } from '@angular/core/testing';

import { ParentContactsService } from './parent-contacts.service';

describe('ParentContactsService', () => {
  let service: ParentContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
