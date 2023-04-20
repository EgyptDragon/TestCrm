import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {


  background: ThemePalette;

  public frontUsersRoute = 'front-users';
  public parentContactsRoute = 'parent-contacts';
  public marketingCampaignsRoute = 'marketing-campaigns';
  public schoolsRoute = 'schools';

  constructor(
    private authService: AuthService,
    public router: Router,
  ) {
    this.background = 'primary';
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
