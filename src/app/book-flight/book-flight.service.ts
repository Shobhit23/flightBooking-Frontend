import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BookFlightService {

  public errorMessage : String;
  public successMessage : String;
  
  constructor(private http: HttpClient) { }

  getData(d:any) : Observable<any>{
   //Consume the exposed REST api from http://localhost:1020/bookFlight
   return this.http.post("http://localhost:1020/bookFlight",d);   
  }  
}

