import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MarketingCampaign, MarketingCampaignCreation, MarketingCampaignDetails } from 'src/app/interfaces/marketing-campaign.interface';

export interface Meta {
  pageCount: number;
  campaignsCount: number;
}
export interface MarketingCampaignResults {
  meta: Meta;
  campaigns: MarketingCampaign[];
}
@Injectable({
  providedIn: 'root'
})
export class MarketingCampaignService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Retrieves schools from API
   * @param page requested page
   */
  public getMarketingCampaigns(page: string): Observable<MarketingCampaignResults> {
    return this.http.get<MarketingCampaignResults>(`${environment.apiURL}/marketing/campaigns`, { params: { page } });
  }

  /**
   * Create a marketing campaign
   * @param marketingCampaign marketing campaign object
   */
  public createMarketingCampaign(marketingCampaign: MarketingCampaignCreation): Observable<MarketingCampaign> {
    return this.http.post<MarketingCampaign>(`${environment.apiURL}/marketing/campaigns`, { body: { marketingCampaign } });
  }

  /**
   * Retrieves marketing campaign with specified ID from API
   * @param id requested marketing campaign id
   */
  public getMarketingCampaignByID(id: number): Observable<MarketingCampaignDetails> {
    return this.http.get<MarketingCampaignDetails>(`${environment.apiURL}/marketing/campaigns/${id}`);
  }

}
