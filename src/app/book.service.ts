import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Injectable({  
	providedIn: 'root'  
})  
export class BookService {

	private SERVER_URL = "http://127.0.0.1:5000";
	constructor(private httpClient: HttpClient) { }

	public fetchData(){  
		return this.httpClient.get(`${this.SERVER_URL}/api/v1/resources/books/all`);  
	}  
}