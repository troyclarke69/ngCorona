import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Injectable({  
	providedIn: 'root'  
})  

export class ApiService {

	//default ?sort=cases
	private SERVER_URL = "https://corona.lmao.ninja/v2/all";

	constructor(private httpClient: HttpClient) { }

	public fetchData(){

		console.log("coronaGlobalService:fetchData");  
		return this.httpClient.get(`${this.SERVER_URL}`);  
	}  
}