import { Injectable } from '@angular/core';
import { ServiceModule } from './service.module';
import { HttpClient } from '@angular/common/http';

declare var google: any;

@Injectable({
  providedIn: ServiceModule
})
export class GoogleChartService {

  private google : any;

  private SERVER_URL = "https://pomber.github.io/covid19/timeseries.json"
  // private SERVER_URL = "https://troyclarke69.pythonanywhere.com/api/download"
  // Note: pythonanywhere API calls pomber.github.io

  constructor(private httpClient: HttpClient) { 
    this.google = google;
  }

  getGoogle(){
    return this.google;
  }

  public fetchData(){
		
		// console.log("GoogleChartService:fetchData");  
		return this.httpClient.get(`${this.SERVER_URL}`);  
  }  
  
}