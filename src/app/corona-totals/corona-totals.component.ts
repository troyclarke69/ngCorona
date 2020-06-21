import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../corona-totals-api.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({  
	selector: 'app-corona-totals',  
	templateUrl: './corona-totals.component.html',  
	styleUrls: ['./corona-totals.component.css']  
}) 

export class CoronaTotalsComponent implements OnInit {	
	public stats = [];
	public sort;
	public continentData = [];
	
	constructor(private apiService: ApiService, private router: Router,
			private route: ActivatedRoute) { }
	
	ngOnInit() {

		this.route.paramMap.subscribe(params => {
            this.sort = params.get("sort");
		})
		
		this.apiService.fetchData(this.sort).subscribe((data: any[])=>{   
			this.stats = data; 			
			var continent = [];
			var population = [];
			var cases = [];
			var deaths = [];

			// get array of continents
			for(var i = 0; i < this.stats.length; i++){
				if (!continent.find(cont => cont == this.stats[i].continent)) {
					if (this.stats[i].continent != '') {
						continent.push(this.stats[i].continent);
					}					
				}				
			}

			// pre-fill/initialize our tally arrays - indexes will match the continent array
			for (var a = 0; a < continent.length; a++) {
				population.push(0);
				cases.push(0);
				deaths.push(0);
			}

			for(var j = 0; j < this.stats.length; j++){
				if (this.stats[j].continent != '') {

					// find the index of the (j) continent in the continent array
					var k = continent.indexOf(this.stats[j].continent);

					// now tally the appropriate arrays
					population[k] += this.stats[j].population;
					cases[k] += this.stats[j].cases;
					deaths[k] += this.stats[j].deaths;
				}			
			}
			// create json data
			for (var l = 0; l < continent.length; l++) {
				var rowData = {};
				rowData['continent'] = continent[l];
				rowData['population'] = population[l];
				rowData['cases'] = cases[l];
				rowData['deaths'] = deaths[l];
				this.continentData.push(rowData);
			}
		}) 
	}

	onClick(s){		
		this.apiService.fetchData(s).subscribe((data: any[])=>{   
			this.stats = data;  
		}) 	

		// reload this page
		this.router.navigateByUrl('/corona-totals/' + s);  
	}
}