import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';
import { GoogleChartService } from '../service/google-chart.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
  title = 'Drag/Drop to Add/Remove countries in the Comparison Chart';
  website = '#';

  private res = [];
  private gLib: any;
  public country: string;
  private stats = [];
  public compData = [];
  public listData = [];
  public percData = [];
  private chartRows = [];
  private headers = [];
  // private chartRow = [];

  // countries = [{name: 'US'},{name: 'Canada'},{name: 'UK'},{name: 'Brazil'}];
  // report = [{name: 'Spain'}];
  public countries = [];
  public report = [];

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

private drawDaily(chartData, div, title)
{
  let data = new this.gLib.visualization.arrayToDataTable(chartData);  
  // console.log('drawMain', data);
  var options = {
    title: title,
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
  let chart = new this.gLib.visualization.LineChart(document.getElementById(div));
  chart.draw(data, options);
}

ngOnInit(): void
{
  this.gChartService.fetchData().subscribe((data: any[])=>{ 

    let keys = Object.keys(data);
    // console.log(data);
    
    let obj = {};
    obj['name'] = 'Canada';
    this.countries.push(obj);

    let start = Math.floor(Math.random() * 5);
    for (var i = start; i < keys.length;) 
    {

      let obj = {};
      obj['name'] = keys[i];
      this.countries.push(obj);
      i = i + 31;
    } 
    // console.log(this.countries);
  })
}

onDrop(event: CdkDragDrop<string[]>) 
{
  // console.log('event', event.item);
  // console.log('dropContainer ', event.item.dropContainer);
  var move = '';
  var prevId = '';
  var curId = '';

  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data,
      event.previousIndex,
      event.currentIndex);
      move = 'moved';
      prevId = 'prevId: ' + event.previousContainer.id;
      curId = 'curId: ' + event.container.id;

  } else {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex, event.currentIndex);
      move = 'transfered';
      prevId = 'prevId: ' + event.previousContainer.id;
      curId = 'curId: ' + event.container.id;

      // only gen chart on transfer
      this.drawCompare(event.previousContainer.id, event.container.id, 
        event.container.data, event.previousContainer.data);
  }  
  
}

private drawCompare(prevId, curId, containerData, previousContainerData) {

  var countries = [];

  if (prevId == curId) {
    this.drawDaily(null, 'divDailyChart', '');
    return;
  };

  if (prevId == "cdk-drop-list-0") {
    countries = containerData;
  } else {
    countries = previousContainerData;
  }
  // console.log('countries ', countries[0]);

  this.listData = [];
  this.percData = [];

  this.gChartService.fetchData().subscribe((data: any[])=>{ 
    // console.log('data ', data); 
    this.headers = [];

    for (var c = 0; c < countries.length; c++) {
      this.stats = data[countries[c].name];
      // console.log('country ',c, countries[c].name);
      var cases = 0; var recovered = 0; var deaths = 0;
      var start = this.stats.length - 1;
      var end = this.stats.length - 61;
      var loop = 0;

      for (var i = start; i > end; i--) {

          var d = []; // daily counts
          var p = []; // daily percentages

          // first pass (one country): push date, cases -- index 0, 1
          // second & subsequent: splice cases index 2++ (i + 1)
          if (c == 0) {

            d.push(this.stats[i]['date'], ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) * -1);
            this.listData.push(d);
            // console.log('push ', c);
            p.push(this.stats[i]['date'], ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) /      this.stats[i - 1]['confirmed'] * -100);
            this.percData.push(p);
          
          } else {

            //arr.splice(index, 0, item)
            this.listData[loop].splice(c + 1, 0, ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) * -1);
            // console.log('fill ', c);
            this.percData[loop].splice(c + 1, 0, ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) / this.stats[i - 1]['confirmed'] * -100);
            
          } 
          loop = loop + 1;
        
      }

      // headers -- for each c (country)
      if (c == 0) {
        this.headers.push('Date', countries[c].name);
      } else {
        this.headers.splice(c + 1, 0, countries[c].name);
      }

    }
   
    this.listData = this.listData.reverse();
    this.listData.unshift(this.headers);
    // console.log('listData ', this.listData);

    this.percData = this.percData.reverse();
    this.percData.unshift(this.headers);
    // console.log('percData ', this.percData);

    // d['country'] = countries[c].name;
    // d['dailypercent'] = ( this.stats[i - 1]['confirmed'] - this.stats[i]['confirmed']) / this.stats[i - 1]['confirmed'] * -100;

    // this.drawMain(); 
    this.drawDaily(this.listData, 'divDailyChart', 'Daily Case Count (last 60 days)');
    this.drawDaily(this.percData, 'divPercChart', 'Daily Percentage Change (last 60 days)');

  }) 
}
 
private fun(obj1, obj2, obj3){

  for(var i = 0; i < obj1.length; i++){
    console.log('container ', obj1[i]['name']);
  }
  for(var j = 0; j < obj2.length; j++){
    console.log('previousContainer ', obj2[j]['name']);
  }
  // for(var k = 0; k < obj3.length; k++){
  //   console.log('dropContainer ', obj3[k]['name']);
  // }
  }
}
