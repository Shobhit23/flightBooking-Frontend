import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormsModule } from '@angular/forms';
import { ViewDetailsService } from "./view-details.service";
import { FlightBooking } from '../shared/FlightBooking';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
  providers: [ViewDetailsService]
})
export class ViewDetailsComponent implements OnInit {

  flightDetails : FlightBooking[];
  successMessage:string;
  errorMessage:string;
  deletingStatus : string;

  constructor(private viewDetailsService : ViewDetailsService) {

   }

  ngOnInit() {
    this.view();
}

  view() {
    this.viewDetailsService.view().subscribe(data => this.flightDetails=data);  
  }

  delete(id) {
    this.successMessage="";
    this.errorMessage="";
    this.deletingStatus="Deleting : "+id+"...";
    this.viewDetailsService.delete(id).subscribe(
      Response => {
      this.viewDetailsService.view().subscribe(data => this.flightDetails=data);
      this.successMessage=Response["message"];
      this.deletingStatus="";
    },
      error => {
        this.viewDetailsService.view().subscribe(data => this.flightDetails=data);
        this.errorMessage=error.error.message;
        this.deletingStatus="";
      }
      );
    
  }

}

