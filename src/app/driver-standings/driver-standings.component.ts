import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.scss']
})
export class DriverStandingsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  dataSource = new MatTableDataSource();
  MRData: Object;
  displayedColumns = ['position', 'driver', 'constructor', 'points', 'wins'];
  url = 'http://ergast.com/api/f1/current/driverStandings.json';

  ngOnInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

    this.http.get(this.url).subscribe(res =>
      this.displayData(res)
    );
  }

  displayData(data) {
    this.dataSource = new MatTableDataSource(data.MRData.StandingsTable.StandingsLists["0"].DriverStandings);
    console.log(data);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
