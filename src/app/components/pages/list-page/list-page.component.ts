import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MarketingCampaign } from 'src/app/interfaces/marketing-campaign.interface';
import { School } from 'src/app/interfaces/school.interface';
import { FrontUsersService } from 'src/app/services/frontUsers/front-users.service';
import { MarketingCampaignService } from 'src/app/services/marketingCampaigns/marketing-campaigns.service';
import { ParentContactsService } from 'src/app/services/parentContacts/parent-contacts.service';
import { SchoolsService } from 'src/app/services/schools/schools.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public pendingRequest: boolean;
  public currentPage: number;
  public itemsCount: number;
  public pageCount: number;
  public list: any;
  public displayedColumns: string[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private frontUsersService: FrontUsersService,
              private parentContactsService: ParentContactsService,
              private marketingCampaignsService: MarketingCampaignService,
              private schoolsService: SchoolsService,
              ) {
    this.pendingRequest = true;
    this.currentPage = 1;
    this.itemsCount = 0;
    this.pageCount = 0;
    this.list = [];
    this.displayedColumns = [];
  }

  ngOnInit(): void {
    this.currentPage = Number(this.route.snapshot.queryParams.page);
    this.getList();
    this.route.queryParams.subscribe(params => {
      const page = 'page';
      this.currentPage = +params[page] || 1;
    });
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(_ => this.getList());
  }

  getList(): void{
    this.list = [];
    switch (this.route.snapshot.paramMap.get('listType')) {
      case 'front-users':
        this.getFrontUsers();
        break;

      case 'parent-contacts':
        this.getParentContacts();
        break;

      case 'marketing-campaigns':
        this.getMarketingCampaigns();
        break;

      case 'schools':
        this.getSchools();
        break;

      default:
        break;
    }
  }

  getFrontUsers(searchString?: string): void{
    this.pendingRequest = true;
    this.frontUsersService.getFrontUsers((this.currentPage - 1).toString(), searchString).subscribe(
      frontUserResults => {
        this.list = frontUserResults.users;
        // TO DO : this.frontUsersCount = Number(frontUserResults.meta.frontUsersCount);
        // TO DO : this.pageCount = Number(frontUserResults.meta.pageCount);
        this.pageCount = Number(frontUserResults.numberOfPages);
        if (this.currentPage > this.pageCount) {
          this.router.navigate(['/content', 'list-page', 'front-users'], {queryParams: { page: 1 }});
        }
        else{
          this.displayedColumns = Object.keys(this.list[0]);
        }
        this.pendingRequest = false;
      }
    );
  }

  getParentContacts(searchString?: string): void{
    this.pendingRequest = true;
    this.parentContactsService.getParentContacts((this.currentPage - 1).toString(), searchString).subscribe(
      parentContactResults => {
        this.list = parentContactResults.parentContacts;
        // TO DO : this.frontUsersCount = Number(frontUserResults.meta.frontUsersCount);
        // TO DO : this.pageCount = Number(frontUserResults.meta.pageCount);
        this.pageCount = Number(parentContactResults.numberOfPages);
        if (this.currentPage > this.pageCount) {
          this.router.navigate(['/content', 'list-page', 'parent-contacts'], {queryParams: { page: 1 }});
        }
        else{
          this.displayedColumns = Object.keys(this.list[0]);
        }
        this.pendingRequest = false;
      }
    );
  }

  getMarketingCampaigns(searchString?: string): void{
    this.pendingRequest = true;
    this.marketingCampaignsService.getMarketingCampaigns((this.currentPage - 1).toString()).subscribe(
      marketingCampaignResults => {
        this.list = marketingCampaignResults.campaigns;
        this.itemsCount = Number(marketingCampaignResults.meta.campaignsCount);
        this.pageCount = Number(marketingCampaignResults.meta.pageCount);
        if (this.currentPage > this.pageCount) {
          this.router.navigate(['/content', 'list-page', 'marketing-campaigns'], {queryParams: { page: 1 }});
        }
        else{
          this.displayedColumns = Object.keys(this.list[0]);
        }
        this.pendingRequest = false;
      }
    );
  }

  getSchools(searchString?: string): void{
    this.pendingRequest = true;
    this.schoolsService.getSchools((this.currentPage - 1).toString()).subscribe(
      schoolResults => {
        this.list = schoolResults.schools;
        this.itemsCount = Number(schoolResults.meta.schoolCount);
        this.pageCount = Number(schoolResults.meta.pageCount);
        if (this.currentPage > this.pageCount) {
          this.router.navigate(['/content', 'list-page', 'schools'], {queryParams: { page: 1 }});
        }
        else{
          this.displayedColumns = Object.keys(this.list[0]);
        }
        this.pendingRequest = false;
      }
    );
  }

  navigateToElement(element: any | MarketingCampaign | School): void{
    if (this.route.snapshot.paramMap.get('listType')){
      this.router.navigate(['/content', 'details', this.route.snapshot.paramMap.get('listType'), element.id]);
    }
    else{
      this.router.navigate(['/']);
    }
  }

}
