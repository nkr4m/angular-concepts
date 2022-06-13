import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildV1Component } from './parent/child-v1/child-v1.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ChildV2Component } from './parent/child-v2/child-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildV1Component,
    ChildV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
