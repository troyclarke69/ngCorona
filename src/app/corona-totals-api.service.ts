import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Injectable({  
	providedIn: 'root'  
})  

export class ApiService {

	//default ?sort=cases
	private SERVER_URL = "https://corona.lmao.ninja/v2/countries?sort=";

	constructor(private httpClient: HttpClient) { }

	public fetchData(s) {

		// console.log("coronaTotalsService:fetchData param", s);  
		return this.httpClient.get(`${this.SERVER_URL}` + s);  
	}  
}