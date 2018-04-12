import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TopnavbarComponent } from '../topnavbar/topnavbar.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { BasicLayoutComponent } from './basicLayout.component';
import { BlankLayoutComponent } from './blankLayout.component';
import { NavigationRightComponent } from '../navigation/navigationRight.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    TopnavbarComponent,
    NavigationComponent,
    NavigationRightComponent,
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent
  ],
  exports: [
    TopnavbarComponent,
    NavigationComponent,
    NavigationRightComponent,
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent
  ]
})
export class LayoutsModule { }
