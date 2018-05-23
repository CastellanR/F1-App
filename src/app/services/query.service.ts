import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QueryService {
  drivers;
  constructors;
  seasons;
  constructorstandings;
  driverstandings;
  seasondrivers;

  constructor(private http: HttpClient) {}

   load() {
    this.getDrivers();
    this.getConstructors();
    this.getConstructorStandings();
    this.getDriversStandings();
    this.getSeasonDrivers();
    this.getSeasons();
   }
  getDriversStandings() {
    const url = 'http://ergast.com/api/f1/current/driverStandings.json';
    this.http.get(url).subscribe(res =>
      this.driverstandings = res
    );
  }

  getConstructorStandings() {
    const url = 'http://ergast.com/api/f1/current/constructorStandings.json';
    this.http.get(url).subscribe(res =>
      this.constructorstandings = res
    );
  }

  getSeasonDrivers() {
    const url = 'http://ergast.com/api/f1/2018/drivers.json';
    this.http.get(url).subscribe(res =>
      this.seasondrivers = res
    );
  }

  getDrivers() {
    const url = 'http://ergast.com/api/f1/drivers.json?limit=900';
    this.http.get(url).subscribe(res =>
      this.drivers = res
    );
  }
  getSeasons() {
    const url = 'http://ergast.com/api/f1/seasons.json?limit=90';
    this.http.get(url).subscribe(res =>
      this.seasons = res
    );
  }

  getConstructors() {
    const url = 'http://ergast.com/api/f1/constructors.json?limit=900';
    this.http.get(url).subscribe(res =>
      this.constructors = res
    );
  }
}
