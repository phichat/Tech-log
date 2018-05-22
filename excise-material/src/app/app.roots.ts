import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BasicLayoutComponent } from './components/layouts/basic-layout/basic-layout.component';
import { NoticeComponent } from './views/investigates/notice/notice.component';
import { NoticeManageComponent } from './views/investigates/notice-manage/notice-manage.component';
import { InvestigateReportComponent } from './views/investigates/investigate-report/investigate-report.component';
import { InvestigateReportManageComponent } from './views/investigates/investigate-report-manage/investigate-report-manage.component';
import { ArrestListComponent } from './views/arrests/arrest-list/arrest-list.component';
import { ArrestManageComponent } from './views/arrests/arrest-manage/arrest-manage.component';
import { RelationshipListComponent } from './views/masters/relationships/relationship-list/relationship-list.component';
import { ReligionListComponent } from './views/masters/religions/religion-list/religion-list.component';
import { NationlalityListComponent } from './views/masters/nationalities/nationlality-list/nationlality-list.component';
import { GoodListComponent } from './views/masters/good-categories/good-list/good-list.component';
import { PictureListComponent } from './views/masters/picture-categories/picture-list/picture-list.component';
import { GoodManageComponent } from './views/masters/good-categories/good-manage/good-manage.component';
import { PictureManageComponent } from './views/masters/picture-categories/picture-manage/picture-manage.component';
import { RelationshipManageComponent } from './views/masters/relationships/relationship-manage/relationship-manage.component';
import { ReligionManageComponent } from './views/masters/religions/religion-manage/religion-manage.component';
import { NationalityManageComponent } from './views/masters/nationalities/nationality-manage/nationality-manage.component';
import { RaceManageComponent } from './views/masters/races/race-manage/race-manage.component';
import { RaceListComponent } from './views/masters/races/race-list/race-list.component';

export const ROUTE: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: BasicLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent }
        ]
    },
    // งานสืบสวนข้อมูล
    {
        path: 'investigate', component: BasicLayoutComponent,
        data: { title: 'งานสืบสวนข้อมูล', breadcrumb: '1. งานสืบสวนข้อมูล' },
        children: [
            // 1.2 รายงานการสืบสวน
            {
                path: 'investigate-report',
                component: InvestigateReportComponent,
                data: {
                    urls: [{ title: '1. งานสืบสวนข้อมูล', url: '/investigate/investigate-report' }, { title: '1.2 รายงานการสืบสวน' }]
                }
            },
            {
                path: 'investigate-report/manage',
                component: InvestigateReportManageComponent,
                data: {
                    urls: [{ title: '1. งานสืบสวนข้อมูล', url: '/investigate/investigate-report' }, { title: '1.2 รายงานการสืบสวน' }]
                }
            },
            // 1.5 แจ้งความนำจับ
            {
                path: 'notice',
                component: NoticeComponent,
                data: {
                    urls: [{ title: '1. งานสืบสวนข้อมูล', url: '/investigate/notice' }, { title: '1.5 แจ้งความนำจับ' }]
                }
            },
            {
                path: 'notice/manage',
                component: NoticeManageComponent,
                data: {
                    urls: [{ title: '1. งานสืบสวนข้อมูล', url: '/investigate/notice' }, { title: '1.5 แจ้งความนำจับ' }]
                }
            }
        ]
    },
    // งานจับกุม
    {
        path: 'arrests', component: BasicLayoutComponent,
        data: { title: 'งานจับกุม', breadcrumb: '2. งานจับกุม' },
        children: [
            {
                path: 'arrest/list', component: ArrestListComponent,
                data: {
                    urls: [{ title: '2. งานจับกุม', url: '/arrests/arrest/list' }, { title: '2.1 บันทึกจับกุม(ส.ส. 2/39)' }]
                }
            },
            {
                path: 'arrest/manage', component: ArrestManageComponent,
                data: {
                    urls: [{ title: '2. งานจับกุม', url: '/arrests/arrest/manage' }, { title: '2.1 บันทึกจับกุม(ส.ส. 2/39)' }]
                }
            }
        ]
    },
    // Master
    {
        path: 'masters', component: BasicLayoutComponent,
        data: { title: 'Master', breadcrumb: 'Master' },
        children: [
            {
                path: 'relationship/list', component: RelationshipListComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/relationship/list' }, { title: 'ข้อมูลความสัมพันธ์' }]
                }
            },
            {
                path: 'relationship/manage', component: RelationshipManageComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/relationship/manage' }, { title: 'ข้อมูลความสัมพันธ์' }]
                }
            },
            {
                path: 'religion/list', component: ReligionListComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/religion/list' }, { title: 'ข้อมูลศาสนา' }]
                }
            },
            {
                path: 'religion/manage', component: ReligionManageComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/religion/manage' }, { title: 'ข้อมูลศาสนา' }]
                }
            },
            {
                path: 'nationality/list', component: NationlalityListComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/nationality/list' }, { title: 'ข้อมูลสัญชาติ' }]
                }
            },
            {
                path: 'nationality/manage', component: NationalityManageComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/nationality/manage' }, { title: 'ข้อมูลสัญชาติ' }]
                }
            },
            {
                path: 'race/list', component: RaceListComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/race/list' }, { title: 'ข้อมูลเชื่อชาติ' }]
                }
            },
            {
                path: 'race/manage', component: RaceManageComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/race/manage' }, { title: 'ข้อมูลเชื่อชาติ' }]
                }
            },
            {
                path: 'good/list', component: GoodListComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/good/list' }, { title: 'ข้อมูลหมวดสินค้า' }]
                }
            },
            {
                path: 'good/manage', component: GoodManageComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/good/manage' }, { title: 'ข้อมูลหมวดสินค้า' }]
                }
            },
            {
                path: 'picture/list', component: PictureListComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/picture/list' }, { title: 'ข้อมูลหมวดภาพถ่าย' }]
                }
            },
            {
                path: 'picture/manage', component: PictureManageComponent,
                data: {
                    urls: [{ title: 'Master', url: '/masters/picture/manage' }, { title: 'ข้อมูลหมวดภาพถ่าย' }]
                }
            }
        ]
    },

    // Handle all other routes
    { path: '**', redirectTo: 'home' }
];
