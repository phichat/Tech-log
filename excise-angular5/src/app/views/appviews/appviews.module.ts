import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './investigates/notice/notice.component';
import { NoticeManageComponent } from './investigates/notice/noticeManage.component';
import { SelectizeDirective } from '../../directives/selectize.directive';
import { DatepickerDirective } from '../../directives/datepicker.directive';
import { ActionSettingComponent } from '../../components/common/action-setting/action-setting.component';
import { DataTablesDirective } from '../../directives/data-tables.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    HomeComponent,
    NoticeComponent,
    NoticeManageComponent,
    ActionSettingComponent,

    // Directives
    SelectizeDirective,
    DatepickerDirective,
    DataTablesDirective
  ],
  exports: [
    HomeComponent,
    NoticeComponent,
    NoticeManageComponent,
    ActionSettingComponent,
  ]
})
export class AppviewsModule { }
