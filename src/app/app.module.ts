import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from './services/newsapi.service';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { SportsComponent } from './components/sports/sports.component';
import { ScienceComponent } from './components/science/science.component';
import { HealthComponent } from './components/health/health.component';
import { GeneralComponent } from './components/general/general.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { BusinessComponent } from './components/business/business.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    CardComponent,
    BannerComponent,
    FooterComponent,
    NavbarComponent,
    TechnologyComponent,
    SportsComponent,
    ScienceComponent,
    HealthComponent,
    GeneralComponent,
    EntertainmentComponent,
    BusinessComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
