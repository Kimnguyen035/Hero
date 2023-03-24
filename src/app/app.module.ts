import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/services/data/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './modules/test/test.component';

import { FormsModule } from '@angular/forms';
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
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
