import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontUserComponent } from '../../pages/details/front-user/front-user.component';
import { MarketingCampaignComponent } from '../../pages/details/marketing-campaign/marketing-campaign.component';
import { ParentContactComponent } from '../../pages/details/parent-contact/parent-contact.component';
import { SchoolComponent } from '../../pages/details/school/school.component';
import { ListPageComponent } from '../../pages/list-page/list-page.component';
import { AuthGuard } from '../../../guards/auth/auth.guard';
import { ContentComponent } from './content.component';

const defaultList = 'front-users';
const routes: Routes = [
  { path: 'content',
    canActivate: [AuthGuard],
    component: ContentComponent,
    children: [
    {
      path: 'list-page/:listType',
      canActivate: [AuthGuard],
      component: ListPageComponent,
    },
    {
      path: 'details',
      canActivate: [AuthGuard],
      children:
      [{
        path: 'front-users/:id',
        canActivate: [AuthGuard],
        component: FrontUserComponent
      },
      {
        path: 'parent-contacts/:id',
        canActivate: [AuthGuard],
        component: ParentContactComponent
      },
      {
        path: 'marketing-campaigns/:id',
        canActivate: [AuthGuard],
        component: MarketingCampaignComponent
      },
      {
        path: 'schools/:id',
        canActivate: [AuthGuard],
        component: SchoolComponent
      }]
    },
    {
      path: '',
      redirectTo: '/content/list-page/' + defaultList + '?page=1',
      pathMatch: 'full'
    }]
  },
  {
    path: '',
    redirectTo: '/content/list-page/' + defaultList + '?page=1',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
