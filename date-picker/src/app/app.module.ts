import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { 
  MatInputModule ,
  MatNativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { DateSelectionComponent } from './date-selection/date-selection.component';
import { PastDateSelectionComponent } from './past-date-selection/past-date-selection.component';

const appRoutes: Routes = [
  { path: '', component: DateSelectionComponent },
  { path: 'past-date', component: PastDateSelectionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DateSelectionComponent,
    PastDateSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
