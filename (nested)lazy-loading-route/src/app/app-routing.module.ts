import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'app-wall', pathMatch:'full'},
  { path: 'app-wall', loadChildren: () => import('./app-wall/app-wall.module').then(m => m.AppWallModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
