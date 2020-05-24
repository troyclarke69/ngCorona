import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Injectable({  
	providedIn: 'root'  
})  
export class CoronaDayService {

	// Get data from here:

	// note: this corona API returns some whacked json - was unable to parse 
	// through 'normal' methods -- downloaded through .net app, and used sql scripts
	// to massage data into sqlite database called thru python here:
	// private SERVER_URL = "http://127.0.0.1:5000/api/daily";
	// private SERVER_URL = "https://corona.lmao.ninja/v2/historical";

	// Post data to SQLITE from custom (Python) API
	// private LOAD_URL = "http://127.0.0.1:5000/corona/addRow?";

	// // Get Transformed/AI-gen data from custom (Python) API, displayed in UI
	// private GET_URL = "http://127.0.0.1:5000/corona/consolidated"

	// private TEST_URL = "http://127.0.0.1:5000/corona/addRow?intId=1&country=Canada&province=Ontario&cases=100&deaths=30&recovered=44"

// 	fetch("https://pomber.github.io/covid19/timeseries.json")
//   .then(response => response.json())
//   .then(data => {
//     data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
//       console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
//     );
//   });

	private SERVER_URL = "https://pomber.github.io/covid19/timeseries.json"

	constructor(private httpClient: HttpClient) { }

	public fetchData(){
		
		console.log("coronaDayService:fetchData");  
		return this.httpClient.get(`${this.SERVER_URL}`);  
	}  

	// POST data to SQLITE
	// public postData(body, headers){
	// public postData(params: string){		
	// 	const headers = new Headers(
	// 	{	'Content-Type': 'application/json' 	});
	// 	// console.log("coronaDayService:postData");  
	// 	// console.log("body", body);
	// 	// console.log("headers", headers);
	// 	let url = `${this.LOAD_URL}` + params;
	// 	this.httpClient.post(`${this.TEST_URL}`, headers);
	// 	// this.httpClient.post(url, headers);
	// 	// this.httpClient.request('POST', `${this.TEST_URL}`);
	// 	// error: error => console.error('There was an error!', error)
	// 	console.log(url);
	// 	return "success";
	// } 
	// GET data from SQLITE service (Python-flask)
	// public getData(){		
	// 	console.log("coronaDayService:getData");  
	// 	return this.httpClient.get(`${this.GET_URL}`);  
	// }  
}