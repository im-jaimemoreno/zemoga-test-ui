import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';
import { SuggestionCardComponent } from './components/suggestion-card/suggestion-card.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoverComponent } from './components/cover/cover.component';
import { VotesWrapperComponent } from './components/votes-wrapper/votes-wrapper.component';
import { PageBlankComponent } from './page-blank/page-blank.component';
import { CoverBlankComponent } from './components/cover-blank/cover-blank.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificationCardComponent,
    SuggestionCardComponent,
    HomeComponent,
    CoverComponent,
    CoverBlankComponent,
    VotesWrapperComponent,
    PageBlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
