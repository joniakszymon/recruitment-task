import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, subscribeOn, switchMap } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
  flight_number = '';
  mission_name = '';
  crew = '';
  launch_date_local = '';
  launch_success = '';
  rocket = '';
  site_name_long = '';
  details = '';

  constructor(private http: MainService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params)
    this.flight_number = this.route.snapshot.params['flight_number'];
    this.mission_name = this.route.snapshot.params['mission_name'];
    this.crew = this.route.snapshot.params['crew'];
    this.launch_date_local = this.route.snapshot.params['launch_date_local'];
    this.launch_success = this.route.snapshot.params['launch_success'];
    this.rocket = this.route.snapshot.params['rocket_name'];
    this.site_name_long = this.route.snapshot.params['site_name_long'];
    this.details = this.route.snapshot.params['details'];
  }
}
