import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { ServiceModule } from './service/service.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MapComponent } from './map/map.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ComparisonComponent } from './comparison/comparison.component';

import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [LineChartComponent, MapComponent, AreaChartComponent, AnalysisComponent, ComparisonComponent],
  imports: [
    CommonModule,
    ServiceModule,
    BrowserModule,

    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule

  ],
  exports: [LineChartComponent, AreaChartComponent, AnalysisComponent, ComparisonComponent],
  providers : []
})
export class GoogleChartModule { }
