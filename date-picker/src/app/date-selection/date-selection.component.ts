import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../services/database.service";
import { UUID } from 'angular2-uuid';
import { Observable } from "rxjs";
import { DateListResponse } from '../model/DateListResponse';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from "@angular/router";

@Component({
  selector: 'app-date-selection',
  templateUrl: './date-selection.component.html',
  styleUrls: ['./date-selection.component.css'],
  providers:[DatabaseService]
})

export class DateSelectionComponent implements OnInit {
  private uuid = UUID.UUID();

  constructor(private database: DatabaseService, public router: Router) { }

  ngOnInit() {}

  // Captures the selected date, and calls postDate() method to insert into database
  public addEvent(event: MatDatepickerInputEvent<Date>) {
    let item = {
      "date": event.value,
    }
    this.postDate(item);
  }

  // Inserts date selected in database
  public postDate(item) {
    this.database.postDateSelection(item).subscribe(
      data => {
        return true;
      },
      error => {
        console.error("Error updating item");
        return Observable.throw(error);
      }
    );
  }

  // Navigates to past dates selected page
  public goPastDates() {
    this.router.navigate(['/past-date']);
  }

}
