import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
/* import { SearchEngineComponent } from './components/search-engine/search-engine.component';
import { SearchResultsComponent } from './components/search-results/search-results.component'; */
import { FlightDetailsComponent } from './pages/flight-details/flight-details.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
/*     SearchEngineComponent,
    SearchResultsComponent, */
    FlightDetailsComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
