import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { QueryService } from '../../services/query.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  seasons: [String];
  drivers: [String];
  positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  constructors: [String];

  season: String;
  driver = String;
  position: Number;
  Constructor: String;

  dataSource = new MatTableDataSource();
  circuit: any;
  displayedColumns = [ 'position', 'driver', 'constructor', 'circuit', 'season', 'points'];

  constructor(private http: HttpClient, private query: QueryService) { }

  ngOnInit() {
      this.drivers = this.query.drivers.MRData.DriverTable.Drivers;
      this.constructors = this.query.constructors.MRData.ConstructorTable.Constructors;
      this.seasons = this.query.seasons.MRData.SeasonTable.Seasons;
  }

  onSubmit() {
    this.http.get
    (`http://ergast.com/api/f1/${this.season}/drivers/${this.driver}/constructors/${this.Constructor}/results/${this.position}.json`)
    .subscribe(res =>
      this.displayData(res)
    );
  }

  displayData(data) {
    this.circuit = data.MRData.RaceTable;
    this.dataSource = new MatTableDataSource(data.MRData.RaceTable.Races);

  }
}
