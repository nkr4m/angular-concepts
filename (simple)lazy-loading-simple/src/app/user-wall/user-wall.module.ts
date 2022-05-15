import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonUtilityModule } from '../common-utility/common-utility.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserWallRoutingModule } from './user-wall-routing.module';
import { UserWallComponent } from './user-wall.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserWallComponent,
    UserDashboardComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserWallRoutingModule,
    CommonUtilityModule,
    RouterModule,
  ]
})
export class UserWallModule { }
