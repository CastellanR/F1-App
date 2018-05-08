import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-constructor-standings',
  templateUrl: './constructor-standings.component.html',
  styleUrls: ['./constructor-standings.component.scss']
})
export class ConstructorStandingsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  dataSource = new MatTableDataSource();
  MRData: Object;
  displayedColumns = ['position', 'constructor', 'nationality', 'points', 'wins'];
  url = 'http://ergast.com/api/f1/current/constructorStandings.json';

  ngOnInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

    this.http.get(this.url).subscribe(res =>
      this.displayData(res)
    );
  }

  displayData(data) {
    this.dataSource = new MatTableDataSource(data.MRData.StandingsTable.StandingsLists["0"].ConstructorStandings);
    console.log(data);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

export interface Element {
  name: string;
  position: number;
  wins: number;
  points: number;
  constructor: string;
}
