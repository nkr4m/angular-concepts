import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWallRoutingModule } from './admin-wall-routing.module';
import { AdminWallComponent } from './admin-wall.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { CommonUtilityModule } from '../common-utility/common-utility.module';


@NgModule({
  declarations: [
    AdminWallComponent,
    AdminDashboardComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminWallRoutingModule,
    CommonUtilityModule
  ]
})
export class AdminWallModule { }
