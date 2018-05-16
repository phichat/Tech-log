import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BasicLayoutComponent } from './components/layouts/basic-layout/basic-layout.component';
import { NoticeComponent } from './views/investigates/notice/notice.component';
import { NoticeManageComponent } from './views/investigates/notice-manage/notice-manage.component';
import { InvestigateReportComponent } from './views/investigates/investigate-report/investigate-report.component';
import { InvestigateReportManageComponent } from './views/investigates/investigate-report-manage/investigate-report-manage.component';
import { ArrestListComponent } from './views/arrests/arrest-list/arrest-list.component';
import { ArrestManageComponent } from './views/arrests/arrest-manage/arrest-manage.component';

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
                path: 'investigate-report-manage',
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
                path: 'notice-manage',
                component: NoticeManageComponent,
                data: {
                    urls: [{ title: '1. งานสืบสวนข้อมูล', url: '/investigate/notice' }, { title: '1.5 แจ้งความนำจับ' }]
                }
            }
        ]
    },
    // งานจับกุม
    {
        path: 'arrest', component: BasicLayoutComponent,
        data: { title: 'งานจับกุม', breadcrumb: '2. งานจับกุม' },
        children: [
            {
                path: 'arrest-list', component: ArrestListComponent,
                data: {
                    urls: [{ title: '2. งานจับกุม', url: '/arrest/arrest-list' }, { title: '2.1 บันทึกจับกุม(ส.ส. 2/39)' }]
                }
            },
            {
                path: 'arrest-manage', component: ArrestManageComponent,
                data: {
                    urls: [{ title: '2. งานจับกุม', url: '/arrest/arrest-manage' }, { title: '2.1 บันทึกจับกุม(ส.ส. 2/39)' }]
                }
            }
        ]
    },

    // Handle all other routes
    { path: '**', redirectTo: 'home' }
];
