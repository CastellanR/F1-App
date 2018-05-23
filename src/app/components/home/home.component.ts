import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private query: QueryService) { }

  ngOnInit() {
    this.query.load();
  }

}
