import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public isFrontUserList: boolean;
  public isParentContactList: boolean;
  public isMarketingCampaignList: boolean;
  public isSchoolList: boolean;
  public frontUserSearchType = 'idOrMail';
  public statusList: string[];
  public sources: string[];
  public status: string;
  public source: string;

  @Input() itemsCount = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utilService: UtilService,
    ) {
    this.isFrontUserList = false;
    this.isParentContactList = false;
    this.isMarketingCampaignList = false;
    this.isSchoolList = false;
    this.statusList = [];
    this.sources = [];
    this.status = '';
    this.source = '';
  }

  ngOnInit(): void {
    this.isFrontUserList = this.route.snapshot.paramMap.get('listType') === 'front-users';
    this.isParentContactList = this.route.snapshot.paramMap.get('listType') === 'parent-contacts';
    this.isMarketingCampaignList = this.route.snapshot.paramMap.get('listType') === 'marketing-campaign';
    this.isSchoolList = this.route.snapshot.paramMap.get('listType') === 'schools';
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(_ => {
      this.isFrontUserList = this.route.snapshot.paramMap.get('listType') === 'front-users';
      this.isParentContactList = this.route.snapshot.paramMap.get('listType') === 'parent-contacts';
      this.isMarketingCampaignList = this.route.snapshot.paramMap.get('listType') === 'marketing-campaign';
      this.isSchoolList = this.route.snapshot.paramMap.get('listType') === 'schools';
    });
    this.utilService.getStatusList().subscribe(statusList => this.statusList = statusList);
    this.utilService.getSources().subscribe(sources => this.sources = sources);
  }

}
