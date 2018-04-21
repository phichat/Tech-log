import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './investigates/notice/notice.component';
import { NoticeManageComponent } from './investigates/notice-manage/notice-manage.component';
import { HomeComponent } from './home/home.component';
import { DatepickerDirective } from '../directives/datepicker.directive';
import { DataTableDirective } from '../directives/data-table.directive';
import { RouterModule } from '@angular/router';
import { ProvincesDirective } from '../directives/provinces.directive';
import { ActionSettingComponent } from './investigates/action-setting/action-setting.component';
import { HeaderDropdownComponent } from '../components/common/header-dropdown/header-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DatepickerDirective,
    DataTableDirective,
    ProvincesDirective,

    NoticeComponent,
    NoticeManageComponent,
    HomeComponent,
    ActionSettingComponent,
    HeaderDropdownComponent
  ],
  exports: [
    // DatepickerDirective,
    // ProvincesDirective,
    // NoticeComponent,
    // NoticeManageComponent
  ]
})
export class ViewsModule { }
