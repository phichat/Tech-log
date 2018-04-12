import { Routes } from '@angular/router';
import { BasicLayoutComponent } from './components/common/layouts/basicLayout.component';
import { HomeComponent } from './views/appviews/home/home.component';
import { NoticeComponent } from './views/appviews/investigates/notice/notice.component';

export const ROUTE: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: 'home', component: BasicLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent }
        ]
    },

    {
        path: 'investigate', component: BasicLayoutComponent,
        children: [
            { path: 'notice', component: NoticeComponent }
        ]
    },

    // Handle all other routes
    { path: '**', redirectTo: 'home' }
];
