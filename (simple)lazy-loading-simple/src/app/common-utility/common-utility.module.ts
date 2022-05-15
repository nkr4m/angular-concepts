import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHeaderV1Component } from './layout/header/user-wall-headers/user-header-v1/user-header-v1.component';
import { UserFooterV1Component } from './layout/footer/user-wall-footers/user-footer-v1/user-footer-v1.component';



@NgModule({
  declarations: [
    UserHeaderV1Component,
    UserFooterV1Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UserHeaderV1Component,
    UserFooterV1Component
  ]
})
export class CommonUtilityModule { }
