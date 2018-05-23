import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { MatTableDataSource} from '@angular/material';
import { QueryService } from '../../services/query.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(private http: HttpClient, private query: QueryService) { }

  dataSource = new MatTableDataSource();
  displayedColumns = ['number', 'driver', 'nationality', 'birth', 'biography'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.query.seasondrivers.MRData.DriverTable.Drivers);
  }
}
