import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import { QueryService } from '../../services/query.service';

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.scss']
})
export class DriverStandingsComponent implements OnInit {

  constructor(private http: HttpClient, private query: QueryService) { }
  dataSource = new MatTableDataSource();
  displayedColumns = ['position', 'driver', 'constructor', 'points', 'wins'];


  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.query.driverstandings.MRData.StandingsTable.StandingsLists['0'].DriverStandings);
  }
}
