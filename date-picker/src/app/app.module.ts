import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatInputModule ,
  MatNativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { DateSelectionComponent } from './date-selection/date-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    DateSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
