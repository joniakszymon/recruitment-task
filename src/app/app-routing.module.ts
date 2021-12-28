import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightDetailsComponent } from './pages/flight-details/flight-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flight-details/:flight_number/:crew/:details/:mission_name/:launch_date_local/:launch_success/:site_name_long/:rocket_name', component: FlightDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }