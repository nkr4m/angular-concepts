import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWallComponent } from './admin-wall.component';

const routes: Routes = [{ path: '', component: AdminWallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWallRoutingModule { }
