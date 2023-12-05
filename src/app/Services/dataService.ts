// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private baseUrl = 'https://localhost:7206';

    constructor(private http: HttpClient) { }
  
    register(user: any): Observable<any> {
      const url = `${this.baseUrl}/register`;
      return this.http.post<any>(url, user);
    }

    login(user: any): Observable<any> {
        const loginUrl = `${this.baseUrl}/login`;
        return this.http.post(loginUrl, user);
      }
    
      addCar(car: any): Observable<any> {
        const carUrl = `${this.baseUrl}/api/cars`;
        return this.http.post(carUrl, car);
      }
      getVehicleDetails(): Observable<any> {
        const vehicleUrl = `${this.baseUrl}/api/cars`;
        return this.http.get(vehicleUrl);
      }

      saveBooking(booking: any): Observable<any> {
        const bookUrl = `${this.baseUrl}/api/Booking`;
        return this.http.post(bookUrl,booking);
      }

      getBookings(): Observable<any> {
        const mylistUrl = `${this.baseUrl}/api/Booking`;
        return this.http.get(mylistUrl);
      }
}
