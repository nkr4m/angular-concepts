import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWallComponent } from './app-wall.component';

const routes: Routes = [
  { path: '', component: AppWallComponent, children:[
    {path: '', redirectTo:'user-wall', pathMatch:'full'},
    { path: 'admin-wall', loadChildren: () => import('./admin-wall/admin-wall.module').then(m => m.AdminWallModule) }, 
    { path: 'user-wall', loadChildren: () => import('./user-wall/user-wall.module').then(m => m.UserWallModule) }  
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppWallRoutingModule { }
