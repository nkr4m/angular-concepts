import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppWallRoutingModule } from './app-wall-routing.module';
import { AppWallComponent } from './app-wall.component';


@NgModule({
  declarations: [
    AppWallComponent
  ],
  imports: [
    CommonModule,
    AppWallRoutingModule
  ]
})
export class AppWallModule { }
