import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../corona-totals-api.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({  
	selector: 'app-corona-countries',  
	templateUrl: './corona-countries.component.html',  
	styleUrls: ['./corona-countries.component.css']  
})  
export class CoronaCountriesComponent implements OnInit {	
	stats = [];	
	constructor(private apiService: ApiService) { }
	
	ngOnInit() {
		this.apiService.fetchData('todayCases').subscribe((data: any[])=>{  
			this.stats = data;  
		}) 		
	}

	onClick(c){
		// console.log('clicked');
	}
}