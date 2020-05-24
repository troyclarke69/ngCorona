import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../corona-global-api.service';

@Component({  
	selector: 'app-corona-global',  
	templateUrl: './corona-global.component.html',  
	styleUrls: ['./corona-global.component.css']  
})  
export class CoronaGlobalComponent implements OnInit {
	
	stats = [];
	deathRate;
	
	constructor(private apiService: ApiService) { }
	
	ngOnInit() {
		this.apiService.fetchData().subscribe((data: any[])=>{  
			console.log(data);  
			this.stats = data; 
			
			// let deathRate = this.stats['deaths'] / this.stats['cases'];
			// let deathRate = 1;
		})  
	}
}