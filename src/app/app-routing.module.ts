import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CoronaTotalsComponent } from './corona-totals/corona-totals.component';
import { CoronaDayComponent } from './corona-day/corona-day.component';
import { BooksComponent } from './books/books.component';
// import { CoronaChartsComponent } from './corona-charts/corona-charts.component';
import { CoronaNewsComponent } from './corona-news/corona-news.component';
import { LineChartComponent } from './google-chart/line-chart/line-chart.component'
import { AreaChartComponent } from './google-chart/area-chart/area-chart.component'
import { MapComponent } from './google-chart/map/map.component'
import { CoronaGlobalComponent } from './corona-global/corona-global.component'
import { CoronaCountriesComponent } from './corona-countries/corona-countries.component'
import { CoronaAnalysisComponent } from './corona-analysis/corona-analysis.component'
import { AnalysisComponent } from './google-chart/analysis/analysis.component'

const routes: Routes = [

  // these are direct feeds:
  { path: '', redirectTo: '/corona-news', pathMatch: 'full' },
  
  { path: 'corona-news', component: CoronaNewsComponent },
  { path: 'corona-global', component: CoronaGlobalComponent },
  { path: 'corona-totals/:sort', component: CoronaTotalsComponent },
  { path: 'corona-countries', component: CoronaCountriesComponent },
  { path: 'corona-analysis', component: CoronaAnalysisComponent },
  { path: 'google-chart/analysis', component: AnalysisComponent },
  

  { path: 'google-chart/line-chart/:country', component: LineChartComponent },
  { path: 'google-chart/map', component: MapComponent },
  { path: 'google-chart/area-chart', component: AreaChartComponent },

  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  
  // ADD: corona-charts (maps, etc...)

  // deprecated: link now from <app-corona-totals>
  // { path: 'corona-day/:country', component: CoronaDayComponent },

  // below from (my) api:
  // { path: 'corona-day', component: CoronaDayComponent },
  // { path: 'books', component: BooksComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}