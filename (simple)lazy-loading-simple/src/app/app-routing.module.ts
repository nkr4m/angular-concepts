import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'user-wall', pathMatch:'full'},
  {path: 'user-wall', loadChildren: () => import('./user-wall/user-wall.module').then(m => m.UserWallModule)},
  {path: 'admin-wall', loadChildren: () => import('./admin-wall/admin-wall.module').then(m => m.AdminWallModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
