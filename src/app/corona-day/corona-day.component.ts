import { Component, OnInit, Input } from '@angular/core';  
import { CoronaDayService } from '../corona-day-api.service';
import { ActivatedRoute } from '@angular/router';

// Implement the interface:
import { ChartData } from '../chart-data';
import { keyframes } from '@angular/animations';

@Component({  
	selector: 'app-corona-day',  
	templateUrl: './corona-day.component.html',  
	styleUrls: ['./corona-day.component.css']  
})  
export class CoronaDayComponent implements OnInit {
	// @Input() x: string;

	stats = [];
	days = [];
	private country: string;
	//chartData: ChartData;
	
	constructor(
		private apiService: CoronaDayService,
		private route: ActivatedRoute

		) { }
	
	ngOnInit() 
	{
		this.route.paramMap.subscribe(params => {
			this.country = params.get("country")
		})	

		console.log('Param ', this.country);

		this.apiService.fetchData().subscribe((data: any[])=>{ 			
			//This seems a bit of a hack, but couldn't figure out another workable method...
			let keys = Object.keys(data);
			//loop through all (c) country names, and when we get a match, set the stats obj to the data[c]
			for (var i=0; i < keys.length; i++) {
				if(this.country == keys[i]){
					this.stats = data[keys[i]] };
			}



			// START > THESE STATEMENTS PLUCKS OUT DATA BY INDEX NUMBERS
			// KEEP IN MIND: Returns only rows (i.e 84 DAYS as of April 15) PER THE COUNTRY PARAM SPECIFIED
			// BUT STILL DO NOT KNOW HOW TO EXTRACT COUNTRY VALUE
			// let dataKeys = Object.keys(this.stats);
			// let dataVals = Object.values(this.stats);
			// let x = dataVals[4];
			// let confirmed = x.confirmed;
			// console.log('keys ', dataKeys); // DOES NOT RETURN COUNTRY NAME
			// console.log('values ', dataVals);
			// console.log('confirmed: ', confirmed);
			// END


			//** Code below was in attempt to process corona.lmao.ninja API
			// Currently unable to make that shit work
			// so processed through Googster (.NET) app and sql scripts

			// ************************************************************************
			// let i = Object.keys(this.stats); //get number of records ... index
			// let dataVals = Object.values(this.stats);

			// //for loop and post to SQL:
			// //{index, <country>, <province>, cases(str), deaths(str), recovered(str)}
			// //In SQL: parse string fields - date : val

			// let x = dataVals[0];
			// let country = x.country;
			// let province = x.province;
			// let objCases = [];
			// objCases = x.timeline.cases;		
			// let objDeaths = [];
			// objDeaths = x.timeline.deaths;
			// let objRecovered = [];
			// objRecovered = x.timeline.recovered;
			// let intId = 0;

			// console.log('index', i);
			// console.log('country', country);
			// console.log('province', province);
			// console.log('objCases', objCases);
			// console.log('objDeaths', objDeaths);
			// console.log('objRecovered', objRecovered);
			// console.log('objCaseDate', objCaseDate);

			// this.sendData(0, country, province, objCases,
			// 	objDeaths, objRecovered);
	
		})  
	}

	// sendData(intId: number, country: string, province: string, 
	// 						cases: object, deaths: object, recovered: object) 
	// {
	// 	let params = 'intId=' + intId + '&country=' + country + '&province=' 
	// 			+ province + '&cases=' + '{11/20/20:5}' + '&deaths=' 
	// 			+ '{11/20/20:5}' + '&recovered=' + '{11/20/20:5}';

	// 	this.apiService.postData(params);

	// 	// const body = {
	// 	// 	intId, country, province, cases, deaths, recovered
	// 	// }
	// 	// const headers = new Headers(
	// 	// 	{
	// 	// 		'Content-Type': 'application/json'
	// 	// 	});

	// 	// return this.apiService.postData(body, {headers: headers});
	// }

}