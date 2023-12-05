import { Component, Inject, ViewChild } from '@angular/core';
import { DataService } from '../Services/dataService';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

//Appointment
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  @ViewChild('bookingForm') bookingForm!: NgForm;

  name: string = '';
  mobileNumber: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {
    if (data && data.vehicleId) {
      // Use data.vehicleId as needed
      console.log('Received vehicleId:', data.vehicleId);
    }
  }
  onSubmit(): void {
    const bookingData = {
      id: '',
      name: this.name,
      mobileNo: this.mobileNumber,
      startDate: this.startDate,
      endDate: this.endDate,
      carId: this.data.vehicleId
    };

    // Call the saveBooking method in DataService
    this.dataService.saveBooking(bookingData).subscribe(
      (response) => {
        // Handle success if needed
        console.log('Booking saved successfully:', response);
        this.showSuccessSnackbar('Booking submitted successfully');
        this.bookingForm.resetForm();
      },
      (error) => {
        // Handle error if needed
        console.error('Error saving booking:', error);
      }
    );
  }

  showSuccessSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success'], 
    });
  }
  
  
  
  showErrorSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-error'], 
    });
  }
}
