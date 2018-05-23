import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import { QueryService } from '../../services/query.service';

@Component({
  selector: 'app-constructor-standings',
  templateUrl: './constructor-standings.component.html',
  styleUrls: ['./constructor-standings.component.scss']
})
export class ConstructorStandingsComponent implements OnInit {

  constructor(private http: HttpClient, private query: QueryService) { }
  dataSource = new MatTableDataSource();
  displayedColumns = ['position', 'constructor', 'nationality', 'points', 'wins'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource(
      this.query.constructorstandings.MRData.StandingsTable.StandingsLists['0'].ConstructorStandings
    );
  }
}
