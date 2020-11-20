import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title='bare - bones'
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = this.dataService.getProjectName();
    }
  }


