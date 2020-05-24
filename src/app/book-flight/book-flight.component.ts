import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { BookFlightService } from "./book-flight.service";

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  providers: [BookFlightService]
})
export class BookFlightComponent implements OnInit {

  errorMessage: String;
  successMessage: String;
  bookButton : Boolean = false;

  constructor(private fb: FormBuilder, private bookFlightService: BookFlightService) { }

  bookingForm = this.fb.group({
    passengerName: ['', Validators.required],
    noOfTickets: ['', [Validators.required,Validators.min(1)]],
    flightId: ['', [Validators.required,Validators.pattern('[A-Z]{3}[\-][0-9]{3}')]]
  })

  ngOnInit() {
    
  }

  book() {
    // Code the method here
    this.successMessage="";
    this.errorMessage="";
    this.bookButton=true;
    this.validateFlight(this.bookingForm.value);
  }

  validateFlight(c: FormControl) {
    /* 
       Code the validator here
       Use flightError as the property
   */
   this.bookFlightService.getData(c).subscribe(
     data => {this.successMessage=data.message;this.bookButton=false},
     error => {this.errorMessage=error.error.message;this.bookButton=false},
     );
   }
   
}



