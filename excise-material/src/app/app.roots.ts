import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { BasicLayoutComponent } from "./components/layouts/basic-layout/basic-layout.component";
import { NoticeComponent } from "./views/investigates/notice/notice.component";
import { NoticeManageComponent } from "./views/investigates/notice-manage/notice-manage.component";

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

    // Handle all other routes
    { path: '**', redirectTo: 'home' }
];
