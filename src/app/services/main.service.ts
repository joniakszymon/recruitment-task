import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  constructor(private http: HttpClient) {}

  //Get results
  getData() {
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=110&offset=0`);
  }
  getFlightDetails(flightNumber: any) {
    return this.http.get(`https://api.spacexdata.com/v3/launches/${flightNumber}`);
  }
}