import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './investigates/notice/notice.component';
import { NoticeManageComponent } from './investigates/notice-manage/notice-manage.component';
import { HomeComponent } from './home/home.component';
import { DatepickerDirective } from '../directives/datepicker.directive';
import { DataTableDirective } from '../directives/data-table.directive';
import { RouterModule } from '@angular/router';
import { ProvincesDirective } from '../directives/provinces.directive';
import { HeaderDropdownComponent } from '../components/common/header-dropdown/header-dropdown.component';
import { InvestigateReportComponent } from './investigates/investigate-report/investigate-report.component';
import { InvestigateReportManageComponent } from './investigates/investigate-report-manage/investigate-report-manage.component';
import { ActionAddComponent } from '../components/common/action-add/action-add.component';
import { ActionSettingComponent } from '../components/common/action-setting/action-setting.component';
import { SelectizeDirective } from '../directives/selectize.directive';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
import { ModalsModule } from './modals/modals.module';
import { StaffComponent } from './modals/staff/staff.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalsModule
  ],
  declarations: [
    DatepickerDirective,
    DataTableDirective,
    ProvincesDirective,
    SelectizeDirective,

    ActionAddComponent,
    ActionSettingComponent,

    NoticeComponent,
    NoticeManageComponent,
    HomeComponent,
    HeaderDropdownComponent,
    InvestigateReportComponent,
    InvestigateReportManageComponent,
    HorizontalTimelineComponent
  ],
  exports: []
})
export class ViewsModule { }
