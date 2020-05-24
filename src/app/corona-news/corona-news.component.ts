import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../corona-news-api.service';

@Component({  
	selector: 'app-corona-news',  
	templateUrl: './corona-news.component.html',  
	styleUrls: ['./corona-news.component.css']  
})  
export class CoronaNewsComponent implements OnInit {
	
	stats = [];
	
	constructor(private apiService: ApiService) { }
	
	ngOnInit() {
		this.apiService.fetchData().subscribe((data: any[])=>{  
			this.stats = data['articles']; 
			console.log('Returned ', this.stats);  
		})  
	}
}