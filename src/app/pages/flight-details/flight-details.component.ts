import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, subscribeOn, switchMap, takeUntil } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit, OnDestroy {
  flightDetails: any;
  private readonly unsubscribe$ =  new Subject();


  constructor(private http: MainService, private route: ActivatedRoute) { }

  ngOnInit() {
    const flight_number = this.route.snapshot.params['flight_number'];

    this.http.getFlightDetails(flight_number).pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      this.flightDetails = res;
      console.log(this.flightDetails);
    })

  }
  ngOnDestroy(): void {
      this.unsubscribe$.next(true);
      this.unsubscribe$.complete();
  }
}
