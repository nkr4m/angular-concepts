import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserWallComponent } from './user-wall.component';

const routes: Routes = [
  { path: '', component: UserWallComponent, children:[
    {path:'', redirectTo:'user-dashboard', pathMatch:'full'},
    {path:'user-dashboard', component:UserDashboardComponent},
    {path:'user-profile', component:UserProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserWallRoutingModule { }
