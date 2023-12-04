import { Component } from '@angular/core';
import { DataService } from '../Services/dataService';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {
  bookings: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBookings().subscribe((data: any) => {
      this.bookings = data;
    });
  }
}
