import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../services/database.service";
import { Observable } from "rxjs";
import { DateListResponse } from '../model/DateListResponse';
import { Router } from "@angular/router";

@Component({
  selector: 'app-past-date-selection',
  templateUrl: './past-date-selection.component.html',
  styleUrls: ['./past-date-selection.component.css'],
  providers:[DatabaseService]
})
export class PastDateSelectionComponent implements OnInit {
  public dates: DateListResponse;

  constructor(private database: DatabaseService, public router: Router) { }

  // On component initialization get the dates from our API endpoint
  ngOnInit() {
    this.getDates();
  }

  // Get list of dates
  public getDates() {
    this.database.getDates().subscribe( data => {
      this.dates = data; 
    });
  }

  // Route back to calendar
  public goBack() {
    this.router.navigate(['']);
  }

}
