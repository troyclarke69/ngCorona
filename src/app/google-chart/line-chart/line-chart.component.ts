import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit 
{
  private res = [];
  private gLib: any;
  public country: string;
  private stats = [];
  public compData = [];
  public listData = [];
  private chartRows = [];
  private chartRow = [];

  // gChartService contains google charts lib ++ fetchData
  constructor( 
                private gChartService : GoogleChartService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router )   
  { 

    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    // this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
    this.gLib.charts.setOnLoadCallback(this.drawMain.bind(this));
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
      title:'Daily Cases: % Change (last 60 days)',
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
    //sample data: note that 1st line holds labels (column headers)
    // this.res = 
    // [
    //   ['Date', 'Cases', 'Deaths', 'Recovered'],
    //   ['2020-1-01',  1000,      400,   200],
    //   ['2020-1-02',  1170,      460,   400],
    //   ['2020-1-03',  660,       1120, 102],
    //   ['2020-1-04',  1030,      540,   222]
    // ];
    // console.log('res', this.res);

    this.route.paramMap.subscribe(params => {
    	this.country = params.get("country")  })
    // this.country = 'US';   
    // console.log('Param ', this.country);

    // TO DO: FIX HACK
    // Country names do not always resolve: e.g "USA" from list = "US" in chart, "UK" = "United Kingdom"
    if (this.country == 'USA'){
      this.country = 'US';
    }
    if (this.country == 'UK'){
      this.country = 'United Kingdom';
    }

    this.gChartService.fetchData().subscribe((data: any[])=>{ 			
      //This seems a bit of a hack, but couldn't figure out another workable method...
      //loop through all (c) country names, and when we get a match, set the stats obj to the data[c]
      let keys = Object.keys(data);
      for (var i=0; i < keys.length; i++) 
      {
        if(this.country == keys[i])
        {
          this.stats = data[keys[i]];
        };
      } 
        
      this.chartRow.push('Date', 'Confirmed', 'Recovered', 'Deaths');
      this.chartRows.push(this.chartRow);
      for(let s of this.stats)
      {
        let chartRow = [];
        chartRow.push(s.date, s.confirmed, s.recovered, s.deaths);
        this.chartRows.push(chartRow);
      }    

      // console.log('stats', this.stats[this.stats.length - 1]['confirmed']);
      var cases = 0; var recovered = 0; var deaths = 0;

      var start = this.stats.length - 1;
      var end = this.stats.length - 61;

      // this.compData.push(['Date', 'Confirmed', 'Change', 'Percent']);
      // this.compData.push(['Date', 'Percent']);
      
      for (var i = start; i > end; i--) {

        var rowData = [];    
        rowData.push(this.stats[i]['date'], ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) / this.stats[i - 1]['confirmed'] * -100);
        this.compData.push(rowData);

        var d = {};
        d['date'] = this.stats[i]['date'];
        d['confirmed'] = this.stats[i]['confirmed'];
        d['daily'] = ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) * -1;
        d['dailypercent'] = ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) / this.stats[i - 1]['confirmed'] * -100;
        this.listData.push(d);

        // console.log('date: ', this.stats[i]['date']);
        // console.log(' >> ', this.stats[i]['confirmed']);
        // console.log(' >> ',( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) * -1 );
        // console.log(' >> ',( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) / this.stats[i - 1]['confirmed'] * -100);
      }
      this.compData = this.compData.reverse();
      this.compData.unshift(['Date', 'Percent']);
      // console.log('compData ', this.compData);

      this.drawMain(); 
      this.drawDaily();
    })       
  }
  
  goBack(): void {
    // this.location.back();
    this.router.navigateByUrl('/corona-totals/cases');  
  }

}