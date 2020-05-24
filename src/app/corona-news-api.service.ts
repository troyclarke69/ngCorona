import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Injectable({  
	providedIn: 'root'  
})  
export class ApiService {

	private PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
	private SERVER_URL = 'https://newsapi.org/v2/top-headlines?' +
	  'q=corona&country=ca&apiKey=de67b2237afe4fb1b77bfbe773987fca';
	  
	constructor(private httpClient: HttpClient) { }

	public fetchData(){

		console.log("coronaNewsService:fetchData");  
		
		return this.httpClient.get(`${this.PROXY_URL}` + `${this.SERVER_URL}`);  
	}  
}