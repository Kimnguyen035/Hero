import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './modules/test/test.component';
import { HeroDetailComponent } from './modules/hero-detail/hero-detail.component';
import { MessageComponent } from './modules/message/message.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeroSearchComponent } from './modules/hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
