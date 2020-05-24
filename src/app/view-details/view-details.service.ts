import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightBooking } from '../shared/FlightBooking';
import { Observable } from 'rxjs';

@Injectable()
export class ViewDetailsService {

  constructor(private http: HttpClient) { 

  }


  view() : Observable<FlightBooking[]> {
    //Consume the exposed URI's specified in QP
    return this.http.get<FlightBooking[]>("http://localhost:1020/getallid");
    
  }

  delete(id) : Observable<any> {
    //Consume the exposed URI's specified in QP
    return this.http.delete("http://localhost:1020/delete/"+id);
  }

}
