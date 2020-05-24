import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../corona-totals-api.service';

@Component({  
	selector: 'app-corona-countries',  
	templateUrl: './corona-countries.component.html',  
	styleUrls: ['./corona-countries.component.css']  
})  
export class CoronaCountriesComponent implements OnInit {
	
	stats = [];
	// cases: any;
	
	constructor(private apiService: ApiService) { }
	
	ngOnInit() {
		// this.apiService.fetchData().subscribe((data: any[])=>{  
		// 	console.log('corona-countries', data);  
		// 	this.stats = data;  
		// }) 		
	}

	onClick(){
		console.log('clicked');
	}
}