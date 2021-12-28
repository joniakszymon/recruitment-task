import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  launches: any[] = [];
  page = 0;
  totalLaunches: number | undefined;
  isFlightSuccess: boolean = false;
  

  filterString: string = '';
  constructor(private http: MainService) { }

  ngOnInit(): void {
    this.getLaunches();
  }
  getLaunches() {
    this.http.getData()
    .subscribe((response: any) => {
      if (response) {
        this.totalLaunches = response.count;
        this.launches = response;
        console.log(this.launches);
      }
    })
  }
  showSuccessLaunches() {
    for(const launch of this.launches) {
      if(launch.launch_success === false) {
        console.log(launch);
      }
    }
  }
}