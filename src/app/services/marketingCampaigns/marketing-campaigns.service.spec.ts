import { TestBed } from '@angular/core/testing';

import { MarketingCampaignsService } from './marketing-campaigns.service';

describe('MarketingCampaignsService', () => {
  let service: MarketingCampaignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketingCampaignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
