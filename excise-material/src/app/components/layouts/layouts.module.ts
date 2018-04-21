import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavigationComponent } from './header-navigation/navigation.component';
import { RightSidebarComponent } from './right-sidebar/rightsidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BasicLayoutComponent,
    NavigationComponent,
    BreadcrumbComponent,
    RightSidebarComponent,
    SidebarComponent
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class LayoutsModule { }
