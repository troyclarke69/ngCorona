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
	
	constructor(private apiService: ApiService, private router: Router,
			private route: ActivatedRoute) { }
	
	ngOnInit() {

		this.route.paramMap.subscribe(params => {
            this.sort = params.get("sort");
		})
		
		this.apiService.fetchData(this.sort).subscribe((data: any[])=>{  
			// console.log(data);  
			this.stats = data;  
		}) 		
	}

	onClick(s){
		
		this.apiService.fetchData(s).subscribe((data: any[])=>{  
			// console.log(data);  
			this.stats = data;  
		}) 	

		// reload this page
		this.router.navigateByUrl('/corona-totals/' + s);  
		console.log(s);  
	}
}