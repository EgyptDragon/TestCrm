export interface MarketingCampaign {
    id?: number;
    name: string;
    start: Date;
    end: Date;
    type: string;
}

export interface MarketingCampaignDetails extends MarketingCampaign {
    offer: string;
    isSingleUse: boolean;
    company: string;
    fees: number;
    codes?: string[][];
    description: string;
}

export interface MarketingCampaignCreation extends MarketingCampaign {
    offer: string;
    isSingleUse: boolean;
    company?: string;
    fees?: number;
    firstPrice?: number;
    freeTrialDays?: number;
    description?: string;

    codeValue?: string;
    nbCodes?: number;
    nbChar?: number;
    prefix?: string;
}