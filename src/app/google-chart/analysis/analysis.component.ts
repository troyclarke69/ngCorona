import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';
import { ActivatedRoute } from '@angular/router';
// import { ChartData } from '../../chart-data'
import { Location } from '@angular/common';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})

export class AnalysisComponent implements OnInit 
{
  // @Input() chartData: ChartData;

  private gLib: any;
  private res = [];
  public country: string;
  private stats = [];
  public compData = [];
  public listData = [];
  public highDataRow = [];
  public highData = [];
  // private chart = [];
  // private chartCols = [];
  private chartRows = [];
  private chartRow = [];
  // public chartData: ChartData;

  // gChartService contains google charts lib ++ fetchData
  constructor( 
                private gChartService : GoogleChartService,
                private route: ActivatedRoute,
                private location: Location )   
  { 

    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    // this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
    // this.gLib.charts.setOnLoadCallback(this.drawMain.bind(this));
  }

  private drawChart()
  {
    let data = this.gLib.visualization.arrayToDataTable(this.res);
    // console.log('drawChart', data);
    var options = {
      title:'Daily Cases | Deaths | Recovered',
      legend:{position:'top-right'},
      chartArea:{width:'100%', height:'100%'},
      curveType: 'function',
     };
    let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));
    chart.draw(data, options);
  }

  private drawMain()
  {
    let data = new this.gLib.visualization.arrayToDataTable(this.chartRows);  
    // console.log('drawMain', data);
    var options = {
      title:'Daily Cases,  Deaths, Recovered',
      //legend:{position:'bottom'},
      chartArea:{width: '50%', height:'50%'},
      curveType: 'function',
      vAxis: {
        scaleType: 'linear', //log or linear (default)
        viewWindowMode: 'explicit',
        viewWindow: {
          //max: 8000,
          min: 0,
        },
        gridlines: {
          count: 5,  //set kind of step (max-min)/count
        }
      }
     };
    let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));
    chart.draw(data, options);
  }

  private drawDaily()
  {
    let data = new this.gLib.visualization.arrayToDataTable(this.compData);  
    // console.log('drawMain', data);
    var options = {
      title:'Daily Cases: % Change (last 30 days)',
      //legend:{position:'bottom'},
      chartArea:{width: '50%', height:'50%'},
      curveType: 'function',
      vAxis: {
        scaleType: 'linear', //log or linear (default)
        viewWindowMode: 'explicit',
        viewWindow: {
          //max: 8000,
          min: 0,
        },
        gridlines: {
          count: 5,  //set kind of step (max-min)/count
        }
      }
     };
    let chart = new this.gLib.visualization.LineChart(document.getElementById('divDailyChart'));
    chart.draw(data, options);
  }

  ngOnInit(): void 
  {

    // this.route.paramMap.subscribe(params => {
    // 	this.country = params.get("country")  })
    // TO DO: FIX HACK
    // Country names do not always resolve: e.g "USA" from list = "US" in chart, "UK" = "United Kingdom"
    // if (this.country == 'USA'){
    //   this.country = 'US';
    // }
    // if (this.country == 'UK'){
    //   this.country = 'United Kingdom';
    // }

    this.gChartService.fetchData().subscribe((data: any[])=>{ 
      // this.stats = data;
      // console.log('data ', data); 

      let keys = Object.keys(data);
      for (var c = 0; c < keys.length; c++) 
      {
        
        this.stats = data[keys[c]];
        // console.log('country ', keys[c]);

        // console.log('stats', this.stats[this.stats.length - 1]['confirmed']);
        // this.compData.push(['Date', 'Confirmed', 'Change', 'Percent']);
        // this.compData.push(['Date', 'Percent']);
        // console.log('stats length', this.stats.length);

        var cases = 0; var recovered = 0; var deaths = 0;
        var start = this.stats.length - 1;
        var end = this.stats.length - 61;
        // var end = 0;
        var dailyHigh = 0;
        var dailyHighDate;
        var dailyHighPer = 0;
        var dailyHighPerDate;
        this.highDataRow = [];

        for (var i = start; i > end; i--) {

            // var rowData = [];    
            // rowData.push(keys[c], this.stats[i].date, ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) / this.stats[i - 1]['confirmed'] * -100);
            // this.compData.push(rowData);

            var d = {};
            d['country'] = keys[c];
            d['date'] = this.stats[i]['date'];
            d['confirmed'] = this.stats[i]['confirmed'];
            d['daily'] = ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) * -1;
            d['dailypercent'] = ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) / this.stats[i - 1]['confirmed'] * -100;

            if ( ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) * -1
                        > dailyHigh) {
              dailyHigh = ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) * -1;
              dailyHighDate = this.stats[i]['date'];
            };

            if ( ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) / this.stats[i - 1]['confirmed'] * -100 
                        > dailyHighPer) {
              dailyHighPer = ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) / this.stats[i - 1]['confirmed'] * -100;
              dailyHighPerDate = this.stats[i]['date'];
            };

            this.listData.push(d);
          
        }
        // console.log('highs ', keys[c], dailyHighDate, dailyHigh, dailyHighDate, dailyHighPer);
        this.highDataRow.push(keys[c], dailyHighDate, dailyHigh, dailyHighPerDate, dailyHighPer);
        this.highData.push(this.highDataRow);

      }
      // this.highData.sort(this.highData[2]);
      // this.highData.sort((a, b) => a - b);

      // this.compData = this.compData.reverse();
      // this.compData.unshift(['Date', 'Percent']);

      // console.log('compData ', this.compData);
      // console.log('listData', this.listData);
      // console.log('highs ', this.highData);

      // this.drawMain(); 
      // this.drawDaily();
    })       
  }
  
  goBack(): void {
    this.location.back();
  }

}