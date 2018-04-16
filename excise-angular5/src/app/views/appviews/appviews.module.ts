import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './investigates/notice/notice.component';
import { NoticeManageComponent } from './investigates/notice/noticeManage.component';

import { DatepickerDirective } from '../../directives/datepicker.directive';
import { DataTablesDirective } from '../../directives/data-tables.directive';

import { CommonsModule } from '../../components/common/commons.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    CommonsModule
  ],
  declarations: [
    HomeComponent,
    NoticeComponent,
    NoticeManageComponent,

    // Directives
    DatepickerDirective,
    DataTablesDirective
  ],
  exports: [
    HomeComponent,
    NoticeComponent,
    NoticeManageComponent,
  ]
})
export class AppviewsModule { }
