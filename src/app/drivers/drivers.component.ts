import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(private http: HttpClient) { }

  dataSource = new MatTableDataSource();
  MRData: Object;
  displayedColumns = ['number', 'driver', 'nationality', 'birth', 'biography'];
  url = 'http://ergast.com/api/f1/2018/drivers.json';

  ngOnInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

    this.http.get(this.url).subscribe(res =>
      this.displayData(res)
    );
  }

  displayData(data) {
    this.dataSource = new MatTableDataSource(data.MRData.DriverTable.Drivers);
    console.log(data);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
