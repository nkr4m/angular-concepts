import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWallComponent } from './admin-wall.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  { path: '', component: AdminWallComponent, children:[
    {
      path:'', redirectTo:'admin-dashboard', pathMatch:'full'
    },
    {
      path:'admin-dashboard', component:AdminDashboardComponent
    },
    {
      path:'admin-profile', component:AdminProfileComponent
    }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWallRoutingModule { }
