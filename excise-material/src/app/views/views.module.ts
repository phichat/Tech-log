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
import { SelectizeDirective } from '../directives/selectize.directive';
import { ModalsModule } from './modals/modals.module';
import { StaffComponent } from './modals/staff/staff.component';
import { ArrestListComponent } from './arrests/arrest-list/arrest-list.component';
import { ArrestManageComponent } from './arrests/arrest-manage/arrest-manage.component';
import { HorizontalTimelineModule } from '../components/common/horizontal-timeline/horizontal-timeline.module';
import { ActionAddModule } from '../components/common/action-add/action-add.module';
import { ActionSettingModule } from '../components/common/action-setting/action-setting.module';
import { HorizontalTimelineComponent } from '../components/common/horizontal-timeline/horizontal-timeline.component';
import { GoodListComponent } from './masters/good-categories/good-list/good-list.component';
import { GoodManageComponent } from './masters/good-categories/good-manage/good-manage.component';
import { NationlalityListComponent } from './masters/nationalities/nationlality-list/nationlality-list.component';
import { NationalityManageComponent } from './masters/nationalities/nationality-manage/nationality-manage.component';
import { PictureListComponent } from './masters/picture-categories/picture-list/picture-list.component';
import { PictureManageComponent } from './masters/picture-categories/picture-manage/picture-manage.component';
import { RelationshipListComponent } from './masters/relationships/relationship-list/relationship-list.component';
import { RelationshipManageComponent } from './masters/relationships/relationship-manage/relationship-manage.component';
import { ReligionListComponent } from './masters/religions/religion-list/religion-list.component';
import { ReligionManageComponent } from './masters/religions/religion-manage/religion-manage.component';
import { RaceListComponent } from './masters/races/race-list/race-list.component';
import { RaceManageComponent } from './masters/races/race-manage/race-manage.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReligionsService } from '../services/master/religions.service';

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    HorizontalTimelineModule,
    ActionAddModule,
    ActionSettingModule,
    ModalsModule
  ],
  declarations: [
    DatepickerDirective,
    DataTableDirective,
    ProvincesDirective,
    SelectizeDirective,

    HeaderDropdownComponent,

    HomeComponent,

    // Begin Arrests //
    ArrestListComponent,
    ArrestManageComponent,
    // End Arrests //

    // Begin Investigates //
    InvestigateReportComponent,
    InvestigateReportManageComponent,
    NoticeComponent,
    NoticeManageComponent,
    // End Investigate //

    // Begin Masters //
    GoodListComponent,
    GoodManageComponent,
    NationlalityListComponent,
    NationalityManageComponent,
    PictureListComponent,
    PictureManageComponent,
    RelationshipListComponent,
    RelationshipManageComponent,
    ReligionListComponent,
    ReligionManageComponent,
    RaceListComponent,
    RaceManageComponent
    // End Masters //
  ],
  exports: [],
  providers: [
    ReligionsService
  ]
})
export class ViewsModule { }
