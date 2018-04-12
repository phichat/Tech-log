import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Modules
import { AppviewsModule } from './views/appviews/appviews.module';
import { LayoutsModule } from './components/common/layouts/layouts.module';
import { RouterModule } from '@angular/router';
import { ROUTE } from './app.roots';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppviewsModule,
    LayoutsModule,
    RouterModule.forRoot(ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
