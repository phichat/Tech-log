import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Modules
import { AppviewsModule } from './views/appviews/appviews.module';
import { RouterModule } from '@angular/router';
import { ROUTE } from './app.roots';
import { CommonsModule } from './components/common/commons.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppviewsModule,
    CommonsModule,
    RouterModule.forRoot(ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
