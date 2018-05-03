import { Injectable, Input } from '@angular/core';
import { Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Rx"
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { DateListResponse } from '../model/DateListResponse';

 @Injectable()
 export class DatabaseService {
    private date: any;
    private api = "https://hdq9aqzi77.execute-api.us-east-1.amazonaws.com/dev/date";
   
    constructor(private http: HttpClient) { }

    public postDateSelection(event) {
        let info =  Object.assign(event);
        let body = JSON.stringify(info);
        return this.http.post(this.api, body)
        .catch((err) => {
            // Do messaging and error handling here
            return Observable.throw(err)
        });;
    }

    public getDates(): Observable<DateListResponse> {
        return this.http.get(this.api)
        .catch((err) => {
            // Do messaging and error handling here
            return Observable.throw(err)
        });
    }
  
 }