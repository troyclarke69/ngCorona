import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Injectable({  
	providedIn: 'root'  
})  
export class ApiService {

	// private PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
	// private SERVER_URL = 'https://newsapi.org/v2/top-headlines?' +
	//   'q=corona&country=ca&apiKey=de67b2237afe4fb1b77bfbe773987fca';

	private SERVER_URL = 'https://troyclarke69.pythonanywhere.com/api/corona-news';
	  
	constructor(private httpClient: HttpClient) { }

	public fetchData(){

		// console.log("coronaNewsService:fetchData");  
		
		// Proxy server stopped working May 31 2020: 'upgrade required'

		// return this.httpClient.get(`${this.PROXY_URL}` + `${this.SERVER_URL}`); 
		return this.httpClient.get(`${this.SERVER_URL}`);  
	}  
}