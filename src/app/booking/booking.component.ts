import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/dataService';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentsComponent } from '../appointments/appointments.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: DataService,private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.vehicleService.getVehicleDetails().subscribe((data: any) => {
      this.vehicles = data;
    });
  }

  //booking a vehicle
  bookVehicle(vehicleId: string): void {
    const dialogRef = this.matDialog.open(AppointmentsComponent, {
      width: '500px',
      panelClass: 'custom-dialog',
      data: {vehicleId: vehicleId}
    });
  }


}
