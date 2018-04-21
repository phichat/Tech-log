import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './notice/notice.component';
import { NoticeManageComponent } from './notice-manage/notice-manage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    NoticeComponent,
    NoticeManageComponent
  ],
  exports: [
    NoticeComponent,
    NoticeManageComponent
  ]
})
export class InvestigatesModule { }
