import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule }     from './app-routing.module';
// import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { CoronaTotalsComponent } from './corona-totals/corona-totals.component';
import { BooksComponent } from './books/books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoronaDayComponent } from './corona-day/corona-day.component';
import { ChartsModule } from 'ng2-charts';
import { CoronaNewsComponent } from './corona-news/corona-news.component';
import { CoronaChartsComponent } from './corona-charts/corona-charts.component';
// import { LineChartComponent } from './google-chart/line-chart/line-chart.component'
import { GoogleChartModule } from './google-chart/google-chart.module';
import { CoronaGlobalComponent } from './corona-global/corona-global.component';
import { CoronaCountriesComponent } from './corona-countries/corona-countries.component';
import { CoronaAnalysisComponent } from './corona-analysis/corona-analysis.component';

import {MatCardModule} from '@angular/material/card';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    CommonModule,
    GoogleChartModule,

    MatCardModule,
    DragDropModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    //)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    CoronaTotalsComponent,
    BooksComponent,
    NavbarComponent,
    SidebarComponent,
    CoronaDayComponent,
    // CoronaChartsComponent,
    CoronaNewsComponent,
    CoronaChartsComponent,
    CoronaGlobalComponent,
    CoronaCountriesComponent,
    CoronaAnalysisComponent,

  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }