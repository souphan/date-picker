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
  private dates: DateListResponse;

  constructor(private database: DatabaseService, public router: Router) { }

  ngOnInit() {
    this.getRestaurants();
  }

  public getRestaurants() {
    this.database.getDates().subscribe( data => {
      this.dates = data; 
    });
  }

  public goBack() {
    this.router.navigate(['']);
  }

}
