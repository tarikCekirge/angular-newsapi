import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlineComponent } from "./components/headline/headline.component";
import { BusinessComponent } from "./components/business/business.component";
import { TechnologyComponent } from "./components/technology/technology.component";
import { SportsComponent } from "./components/sports/sports.component";
import { ScienceComponent } from "./components/science/science.component";
import { HealthComponent } from "./components/health/health.component";
import { GeneralComponent } from "./components/general/general.component";
import { EntertainmentComponent } from "./components/entertainment/entertainment.component";
import { NewsDetailComponent } from "./components/news-detail/news-detail.component";

const routes: Routes = [
  {
    path: '', component: HeadlineComponent,
  },
  {
    path: 'business', component: BusinessComponent,
  },
  {
    path: 'technology', component: TechnologyComponent,
  },
  {
    path: 'sports', component: SportsComponent,
  },
  {
    path: 'sience', component: ScienceComponent,
  },
  {
    path: 'health', component: HealthComponent,
  },
  {
    path: 'general', component: GeneralComponent,
  },
  {
    path: 'entertainment', component: EntertainmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
