
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutsModule } from './components/layouts/layouts.module';
import { ViewsModule } from './views/views.module';
import { RouterModule } from '@angular/router';
import { ROUTE } from './app.roots';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE),
    LayoutsModule,
    ViewsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }