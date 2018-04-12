import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './investigates/notice/notice.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    HomeComponent,
    NoticeComponent
  ],
  exports: [
    HomeComponent,
    NoticeComponent
  ]
})
export class AppviewsModule { }
