import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../corona-charts-api.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { LINE_CHART_COLORS } from './chart.colors';

@Component({  
	selector: 'app-corona-charts',  
	templateUrl: './corona-charts.component.html',  
	styleUrls: ['./corona-charts.component.css']  
})  

export class CoronaChartsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  _data: any[];

  lineChartData: any;
  lineChartLabels: any;
  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() { }
}